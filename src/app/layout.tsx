import '../styles/globals.css'
import { NextUI } from './providers/NextUIProvider'
import type { Metadata } from 'next'

const APP_NAME = 'To Do List App'
const APP_DEFAULT_TITLE = 'To Do App'
const APP_TITLE_TEMPLATE = '%s - To Do App'
const APP_DESCRIPTION = 'Best To Do app in the world!'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  themeColor: '#FFFFFF',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <NextUI>{children}</NextUI>
      </body>
    </html>
  )
}
