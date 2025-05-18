import type { Metadata } from "next";import "../styles/style.css";



export const metadata: Metadata = {
  title: "Homie Band",
  description: "It's Homie Band",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>
    </html>
  );
}
