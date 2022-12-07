import "../styles/globals.css"
import "moment/locale/ms-my"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main className='container min-h-screen'>
        {children}
        </main>
        <footer className="p-[40px] bg-zinc-100 mt -[10px]">
          Made by Youwdin
        </footer>
        </body>
    </html>
  )
}
