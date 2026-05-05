import "./globals.css";

export const metadata = {
  title: "Country Facts",
  description: "CMPS 350 Lab 9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}