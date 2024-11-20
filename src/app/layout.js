import "./globals.css";
import { Lexend } from 'next/font/google'


const lexend = Lexend({subsets: ['latin']})

export const metadata = {
  title: "Cremata | Budget Tool and Expense Tracker",
  description: "Made by Tanner Garner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend}>
        {children}
      </body>
    </html>
  );
}
