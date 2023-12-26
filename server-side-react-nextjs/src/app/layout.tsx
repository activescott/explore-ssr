import { Metadata } from "next"
import "./index.css"
import { SiteHeader } from "../components/SiteHeader"

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Web site created with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
