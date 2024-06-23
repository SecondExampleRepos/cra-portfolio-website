import type { Metadata } from 'next'
import 'src/index.css'
import 'src/style.css'

export const metadata: Metadata = {
  title: 'S0umyajit | Portfolio',
  description: 'Self Developed personal website build with React.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}