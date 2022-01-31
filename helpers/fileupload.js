const multer = require(`multer`)
const AppErrorHandler = require('../errors/appErrorHandler')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '/public/images'),

  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `post-${file.fieldname}-${Date.now()}.${ext}`)
  },
})

const multerFilter = (req, file, cb) =>
  file.mimetype.split('/')[0] === 'image'
    ? cb(null, true)
    : cb(new AppErrorHandler('Not an image, please upload only images'), false)

exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
})
