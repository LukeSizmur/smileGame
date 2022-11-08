import React from 'react'
import Navbar from './components/Navbar'
import styles from '../styles/gamePage.module.css'

export default function gamePage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className=" text-center text-2xl text-teal-700">Game Page</h1>
        </div>
    )
}