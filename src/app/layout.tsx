import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "AZM Nexus | Telemedicine Solutions",
  description: "Advanced Telemedicine and Healthcare Technology Solutions by AZM Nexus. Virtual Care, Analytics, and Security for the modern medical era.",
  keywords: "telemedicine, healthcare, virtual care, medical technology, AZM Nexus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
