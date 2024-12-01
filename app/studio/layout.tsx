import React from 'react'

export const metadata = {
  title: 'Studio | Jewel in the Mines',
  description: 'Content management for Jewel in the Mines blog',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
