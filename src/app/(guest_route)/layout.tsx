import { getServerSession } from "next-auth"
import React from "react"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"

type Props = {
  children: React.ReactNode
}

export default async function PrivateLayout({ children }: Props) {
  const session = await getServerSession(authOptions)
  if (session?.user) redirect("/")

  return <>{children}</>
}