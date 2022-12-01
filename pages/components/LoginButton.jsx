import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  
  return (
    <>
      <button className="rounded-full 
            px-5
            py-1
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white 
            text-2xl
            mt-5
            hover:drop-shadow-md" onClick={() => signIn()}>Sign in</button>
    </>
  )
}