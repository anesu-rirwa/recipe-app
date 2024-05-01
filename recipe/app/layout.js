import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ["latin"]});

export const metadata = {
  title: "ChefsTable",
  description: "Recipe finder app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
