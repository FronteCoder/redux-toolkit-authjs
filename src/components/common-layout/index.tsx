import ReduxProvider from "@/provider";
import { ReactNode } from "react";

export default async function CommonLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
return <ReduxProvider>{children}</ReduxProvider>
}
