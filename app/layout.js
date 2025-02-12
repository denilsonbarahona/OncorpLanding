import { Toaster } from "react-hot-toast";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";

// Load the Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Oncorp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header /> {children}
        <Toaster /> <Footer />
      </body>
    </html>
  );
}
