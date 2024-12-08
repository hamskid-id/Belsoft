import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { TopNav } from '@/components/section/top-nav'
import { Footer } from '@/components/section/footer'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Founders Friday',
  icons: {
    icon: '/brand.png'
  },
  description:
    "Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`bg-base_white m-auto min-h-[100vh] flex flex-col ${montserrat.className} antialiased`}
      >
        <TopNav />
        <main className='mb-0 flex-grow lg:mt-[89px] mt-[161px]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
