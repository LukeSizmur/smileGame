import Navbar from './components/Navbar'
import MainHome from './components/MainHome'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// this page is the default page
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainHome />
    </div>
  )
}
