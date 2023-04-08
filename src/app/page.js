import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import logo from '../assets/rdlogodefault.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
         <div className={styles.topbar}>
            <Image className={styles.Image} src={logo} width={174} height={32}/>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
            </ul>
      </div>
    </main>
  )
}
