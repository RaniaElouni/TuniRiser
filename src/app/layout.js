
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import "../styles/globals.css";



export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Caveat:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="no-scrollbar overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
