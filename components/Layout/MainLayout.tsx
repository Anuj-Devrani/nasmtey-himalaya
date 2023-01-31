import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from '../Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex shrink-0 grow flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
