import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/app/Components/ClientThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amit CK",
  description: "Amit CK - Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.variable} suppressHydrationWarning>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
