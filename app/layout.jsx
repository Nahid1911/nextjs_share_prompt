import "@/styles/globals.css"
export const metadata = {
  title: 'Promptppia',
  description: 'Discover & share prompts',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
        {children}
        </main>
        </body>
    </html>
  )
}
