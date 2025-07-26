import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const outfit = Outfit({
  variable: "--font-Outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F21 Portofolio",
  description: "Website portofolio dan layanan digital Fathurrahman – Web Developer • UI Designer • Fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/f21-logo.png" type="image/png" />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
