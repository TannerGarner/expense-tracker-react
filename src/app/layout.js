import GoalProvider from "@/context/GoalContextProvider";
import "./globals.css";
import { Lexend } from 'next/font/google'
import TransactionProvider, { TransactionContext } from "@/context/TransactionContextProvider";
import DisplayProvider from "@/context/DisplayContextProvider";


const lexend = Lexend({subsets: ['latin']})

export const metadata = {
  title: "Cremata | Budget Tool and Expense Tracker",
  description: "Made by Tanner Garner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend}>
        <GoalProvider>
          <TransactionProvider>
            <DisplayProvider>
              {children}
            </DisplayProvider>
          </TransactionProvider>
        </GoalProvider>
      </body>
    </html>
  );
}
