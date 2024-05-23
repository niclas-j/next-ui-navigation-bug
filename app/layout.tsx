import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import {
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUiNavbar,
} from "@nextui-org/react";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Counter } from "@/components/counter";

function Navbar() {
  return (
    <NextUiNavbar>
      <NavbarBrand>Hype</NavbarBrand>

      <NavbarContent justify="end">
        <Counter />
        <Link href="/settings/">Settings</Link>
      </NavbarContent>
    </NextUiNavbar>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen dark">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
