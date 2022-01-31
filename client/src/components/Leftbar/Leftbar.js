import React from 'react'
import L from './leftbar.module.css'
import Profilecard from './Profilecard'

const Leftbar = ({ user }) => (
  <aside id={L.aside_left}>
    <div className={L.aside_left_content}>
      <Profilecard />
      <input type='text' placeholder='search...' className={L.searchbar} />
      <ul className={L.aside_left_content_UL}>
        <h3 className={L.title}>People you're following</h3>
        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person1.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Smith kelvin</p>
          </div>

          <div className={L.nicheBadge} style={{ backgroundColor: 'green' }}>
            Animation
          </div>
        </li>

        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person2.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Halley vikky</p>
          </div>

          <div className={L.nicheBadge} style={{ backgroundColor: 'red' }}>
            web design
          </div>
        </li>

        <li className={`${L.followingList} ${L.offline} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person3.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>John doe</p>
          </div>

          <div className={L.nicheBadge} style={{ backgroundColor: 'blue' }}>
            illustration
          </div>
        </li>

        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person4.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>prince boateng</p>
          </div>

          <div className={L.nicheBadge} style={{ backgroundColor: 'purple' }}>
            artist
          </div>
        </li>

        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person5.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Helen samuel</p>
          </div>

          <div className={L.nicheBadge} style={{ backgroundColor: 'black' }}>
            technician
          </div>
        </li>

        <li className={`${L.followingList} ${L.offline} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person6.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Joy doyinsola</p>
          </div>

          <div className={L.nicheBadge} style={{ backgroundColor: 'orange' }}>
            Animation
          </div>
        </li>

        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person7.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Penny ted</p>
          </div>

          <div className={L.nicheBadge}>Animation</div>
        </li>

        <li className={`${L.followingList} ${L.offline} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person8.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Sheldon cooper</p>
          </div>

          <div className={L.nicheBadge}>Animation</div>
        </li>

        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person9.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Leonard lee kim</p>
          </div>

          <div className={L.nicheBadge}>Animation</div>
        </li>

        <li className={`${L.followingList} ${L.offline} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person10.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Smith kelvin</p>
          </div>

          <div className={L.nicheBadge}>Animation</div>
        </li>

        <li className={`${L.followingList} flex`}>
          <div className='flex'>
            <div className={L.followingList_imgContainer}>
              <img src='/images/person3.jpg' alt='user pic' />
              <span className={L.badge}></span>
            </div>
            <p className={L.followingList_name}>Smith kelvin</p>
          </div>

          <div className={L.nicheBadge}>Animation</div>
        </li>
      </ul>
    </div>
  </aside>
)

export default Leftbar
