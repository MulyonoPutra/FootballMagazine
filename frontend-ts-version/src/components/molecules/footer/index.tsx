import './footer.scss';

import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg';


const styles = {
  background  : `p-4 bg-white sm:p-6 dark:bg-gray-800`,
  text        : `self-center text-2xl font-semibold whitespace-nowrap dark:text-white`,
  wrapper     : `grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3`,
  title       : `mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white`,
  divider     : `my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8`,
  icon        : `text-gray-500 hover:text-gray-900 dark:hover:text-white`,
  signature   : `text-sm text-gray-500 sm:text-center dark:text-gray-400`,
  ul          : `text-gray-600 dark:text-gray-400`
}

const Footer: React.FC = () => {
  return (
    <>
    <div className='footer'>
      <footer className={styles.background}>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://flowbite.com' className='flex items-center'>
              <span className='footer-text'>Football Magazine</span>
            </a>
          </div>
          <div className={styles.wrapper}>
            <div>
              <h2 className={styles.title}>
                Resources
              </h2>
              <ul className={styles.ul}>
                <li className='mb-4'>
                  <a href='https://flowbite.com' className='hover:underline'>
                    Football Magazine ID
                  </a>
                </li>
                <li>
                  <a href='https://tailwindcss.com/' className='hover:underline'  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={styles.title}>
                Follow us
              </h2>
              <ul className={styles.ul}>
                <li className='mb-4'>
                  <a href='https://github.com/MulyonoPutra' className='hover:underline'>
                    Github
                  </a>
                </li>
                <li>
                  <a href='https://discord.com/' className='hover:underline'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={styles.title}>
                Legal
              </h2>
              <ul className={styles.ul}>
                <li className='mb-4'>
                  <a href='!#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='!#' className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='footer-signature'>
            © 2022
            <a href='https://flowbite.com' className='hover:underline'>
            Football Magazine ID™
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
            <span
              className={styles.icon}
            >
              <FacebookIcon />
            </span>
            <span
              className={styles.icon}
            >
              <InstagramIcon />
            </span>
            <span
              className={styles.icon}
            >
              <TwitterIcon />
            </span>
          </div>
        </div>
      </footer>
    </div>
  </>
  )
}

export default Footer