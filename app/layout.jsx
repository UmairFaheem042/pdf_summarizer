import Header from "@/components/common/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${hostGrotesk.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
