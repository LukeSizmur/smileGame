import React from 'react'
import styles from '../styles/gamePage.module.css'
import BoardPageMain from '../pages/components/BoardPageMain'

export default function BoardPage() {
    return (
        <div className={styles.container}>
            <BoardPageMain />
        </div>
    )
}