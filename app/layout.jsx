import { JetBrains_Mono, Handjet, Peralta } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

const handjet = Handjet({
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-handjet'
});

const peralta = Peralta({
  subsets: ["latin"], 
  weight: ["400"],
  variable: '--font-peralta'
});

export const metadata = {
  title: "Youtube Video Downloader",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={peralta.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
