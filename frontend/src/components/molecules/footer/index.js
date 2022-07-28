import './footer.scss';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <footer className='footer-bg'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0'>
              <a href='https://flowbite.com' className='flex items-center'>
                <span className='footer-text'>Football Magazine</span>
              </a>
            </div>
            <div className='footer-wrapper'>
              <div>
                <h2 className='footer-title'>
                  Resources
                </h2>
                <ul className='footer-ul'>
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
                <h2 className='footer-title'>
                  Follow us
                </h2>
                <ul className='footer-ul'>
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
                <h2 className='footer-title'>
                  Legal
                </h2>
                <ul className='footer-ul'>
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
          <hr className='footer-divider' />
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
                className='footer-icon'
              >
                <FacebookIcon />
              </span>
              <span
                className='footer-icon'
              >
                <InstagramIcon />
              </span>
              <span
                className='footer-icon'
              >
                <TwitterIcon />
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
