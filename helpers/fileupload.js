const multer = require('multer')
const AppErrorHandler = require('../errors/appErrorHandler')

const handleFileUpload = folder => {
  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, `public/images/${folder}`),
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1]
      cb(null, `${file.fieldname}-${Date.now()}-${ext}`)
    },
  })

  const multerFilter = (req, file, cb) =>
    file.mimetype.split('/')[0] === 'image'
      ? cb(null, true)
      : cb(new AppErrorHandler('Not a file, please upload an image file'), 400)

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  })

  return upload
}

module.exports = handleFileUpload
