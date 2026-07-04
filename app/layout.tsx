import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "LONGHD Download Gate", description: "Follow to download by LONGHD" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body>{children}</body></html>}
