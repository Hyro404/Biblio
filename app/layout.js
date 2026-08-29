import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Biblio",
  description: "libritos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={pixelify.className}>{children}</body>
    </html>
  );
}
