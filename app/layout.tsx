import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScrapQuest",
  description: "Unlock insights from the web with our powerful web scraper",
  other: {'google-site-verification': "3riqoLz1ctin_Cjqew-2mycvrLFtfbq9K9mfYfUx7gk"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8QXWGCQ3R0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8QXWGCQ3R0');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
