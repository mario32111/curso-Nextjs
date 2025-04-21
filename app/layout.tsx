import { montserrat } from './fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`} >
          {children}
        <footer className='py-10 flex justify-center item-center'>Hecho con amor por la gente de vercel</footer>
      </body>
    </html>
  );
}
