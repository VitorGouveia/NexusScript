import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Sua dashboard.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>inside dashboard: {children}</div>
}
