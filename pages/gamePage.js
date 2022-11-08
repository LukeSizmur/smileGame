import React from 'react'
import GamePageMain from './components/GamePageMain'
import styles from '../styles/gamePage.module.css'
import GamePageLeaderboard from './components/GamePageLeaderboard'

export default function gamePage() {
    return (
        <div className={styles.container}>
            <GamePageMain />
            <GamePageLeaderboard />
        </div>
    )
}