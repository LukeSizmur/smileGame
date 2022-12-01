import React from 'react'
import GamePageMain from './components/GamePageMain'
import RestrictedView from './components/RestrictedView'
import styles from '../styles/gamePage.module.css'
import GamePageLeaderboard from './components/GamePageLeaderboard'
import { UseSession, signOut, useSession } from 'next-auth/react'

export default function gamePage() {
    const {data:session} = useSession({required: true})
    // if the user is signed in - render the game page component
    if (session) {
        return (
            <div className={styles.container}>
                <GamePageMain />
            </div>
        )
    } else {
        // if not, render the RestrictedView component
        return (
            <div>
                <RestrictedView />
            </div>
        )
    }
    
}