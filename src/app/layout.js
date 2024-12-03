import "./globals.css";
import { Lexend } from 'next/font/google'
import DisplayProvider from "@/context/DisplayContextProvider";
import {GoalInputProvider, GoalProvider} from "@/context/GoalContextProvider";
import { TransactionInputProvider, TransactionsProvider } from "@/context/TransactionContextProvider";


const lexend = Lexend({subsets: ['latin']})

export const metadata = {
  title: "Cremata | Budget Tool and Expense Tracker",
  description: "Made by Tanner Garner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend}>
        <GoalInputProvider>
          <GoalProvider>
            <TransactionsProvider>
              <TransactionInputProvider>
                <DisplayProvider>
                  {children}
                </DisplayProvider>
              </TransactionInputProvider>
            </TransactionsProvider>
          </GoalProvider>
        </GoalInputProvider>
      </body>
    </html>
  );
}
