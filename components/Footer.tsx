import Icon from '@mdi/react'
import { mdiHeart } from '@mdi/js'

const Footer: React.FC = () => {
  return (
    <div className="flex w-full justify-center bg-neutral">
      <div className="w-full max-w-7xl">
        <footer className="footer grid-cols-2 p-10 text-white">
          <div>
            <span className="footer-title">Company</span>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <a
              href="https://instagram.com/namastey_himalaya?igshid=ZDdkNTZiNTM="
              className="link-hover link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/namasteyhimalaya77?mibextid=ZbWKwL"
              className="link-hover link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </footer>
        {/* <div className="flex justify-center font-comfortaa text-lg font-semibold text-white">
          Made with{' '}
          <Icon
            path={mdiHeart}
            title="User Profile"
            size={1}
            // horizontal
            // vertical
            // rotate={90}
            color="red"
            spin
          />
          in Uttarakhand
        </div> */}
      </div>
    </div>
  )
}

export default Footer
