import ReduxProvider from "@/provider";
import { ReactNode } from "react";
import Header from "../header";

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReduxProvider>
    <Header/>
    {children}
    </ReduxProvider>;
}
