import NavBar from "../_components/NavBar";

import { type Metadata } from "next";

// TODO: This will have the username in the title when logged in
export const metadata: Metadata = {
  title: "Munchlax: A friendly food tracker",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex-column ml-auto mr-auto max-w-7xl content-center">
      <NavBar />
      {children}
    </main>
  );
}
