import SideMenu from '../components/SideMenu'
import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Streaming Service',
  description: 'Web app for course project',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={font.className}>
        <SideMenu />
        {children}
      </body>
    </html>
  )
}
