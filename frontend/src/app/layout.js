export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}