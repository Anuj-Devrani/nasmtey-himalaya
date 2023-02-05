import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'

type Props = {
  children?: ReactNode
  navbarFixed?: boolean
}

const Layout: React.FC<Props> = ({ children, navbarFixed }) => {
  return (
    <div className="flex flex-col">
      <Navbar isFixed={navbarFixed} />
      <main className="flex shrink-0 grow flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
