import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          {/* <h1 style={{zIndex:50, color:'red',position:"fixed"}}>RADIIIIIIIIIIIIIIIIIIIIII</h1> */}
          
          {/* ovde su children fajlovi unutar (auth) foldera */}
          {children}
          
          </body>
      </html>
    </ClerkProvider>
  );
}
