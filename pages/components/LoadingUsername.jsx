import React from 'react';
import { useSession } from 'next-auth/react';

export default function LoadingUsername() {
   const {data:session} = useSession()

    return (
       <p>{session.user.name}</p>
    )
}