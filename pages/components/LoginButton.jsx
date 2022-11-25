import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="rounded-full 
            px-5
            py-1
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white 
            text-lg
            mt-5
            hover:drop-shadow-md" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="rounded-full 
            px-5
            py-1
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white 
            text-lg
            mt-5
            hover:drop-shadow-md" onClick={() => signIn()}>Sign in</button>
    </>
  )
}