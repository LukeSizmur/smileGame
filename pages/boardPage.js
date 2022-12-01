import React from 'react'
import styles from '../styles/gamePage.module.css'
import BoardPageMain from '../pages/components/BoardPageMain'
import { useSession, signOut } from 'next-auth/react'
import RestrictedView from './components/RestrictedView'

export default function BoardPage() {
    const {data:session} = useSession({required: true})
    
    if (session) {
        return (
            <div className={styles.container}>
                <BoardPageMain />
            </div>
            )
        
    } else {
        return (
            <RestrictedView />
        )
    }
    
}