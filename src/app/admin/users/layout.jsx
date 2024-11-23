import { Toaster } from "@/components/ui/toaster"

export default function UsersLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

