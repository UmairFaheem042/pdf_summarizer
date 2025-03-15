import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "PDF Summarizer",
  description: "Summarize your PDF files with ease",
};

const hostGrotesk = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hostGrotesk.className}>{children}</body>
    </html>
  );
}
