import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee Haven - Premium Coffee Experience",
  description:
    "Discover the perfect brew with our premium coffee collection. From rich espressos to smooth lattes, experience coffee perfection.",
  keywords:
    "coffee, espresso, latte, cappuccino, premium coffee, coffee shop, artisan coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden w-full`}>
        {children}
      </body>
    </html>
  );
}
