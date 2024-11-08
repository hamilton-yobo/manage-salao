export const metadata = {
  title: 'Click Salão',
  description: 'Criado por Hamilton Yobo',
}

import './styles/output.css';
import StoreProvider from './StoreProvider';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="pt">
        <head>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        </head>
        <body className='bg-grayLight'>
          <Header/>
          <div className='flex'>
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  )
}
