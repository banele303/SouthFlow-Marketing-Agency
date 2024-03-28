import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Burgeon Plumbers | best plumbers in Midrand and Pretoria",
  description: "We help you wit all your plumbing needs. Fast and reliable plumbers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
