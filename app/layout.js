import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // کتابخانه اصلی SVG Font Awesome سعی نکند عناصر <style> را در <head> صفحه وارد کند.

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Generated by Abol Ghana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
        <Nav />
        <div className="flex-grow overflow-y-auto bg-page text-default-text">{children}</div>
        </div>
      </body>
    </html>
  );
}
