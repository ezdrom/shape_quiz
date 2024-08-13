import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
    typeof window !== "undefined" && window.localStorage.setItem("quiz", JSON.stringify({}));
    return (
        <div className={styles.homeWrapper}>
            <p className={styles.description}>Welcome &nbsp; 👋</p>
            <p className={styles.description}>Dear Servant of Jesus,
                It is our firm conviction that a call to serve is inherent in the invitation to follow Jesus.
                Understanding who God made you to be, will help you discover what He’s called you to do.</p>
            <p className={styles.description}>In order to help you better understand who God made you to be, we’ll utilize an acrostic made
                popular by Pastor Rick Warren and Pastor Erik Rees of Saddleback Church in Southern
                California. The acrostic is the word S.H.A.P.E. As you begin unpacking your God-given
                “S.H.A.P.E.”, it is our earnest prayer that you will understand more fully what it means for you to
                serve God and His Kingdom – so that your passion can meet God’s purpose!</p>
            <p className={styles.description}>ABOUT S.H.A.P.E. - Five Ways God Has Shaped You:
                <br></br>S – Spiritual Gifts - What has God supernaturally gifted me to do?
                <br></br>H – Heart - What do I have passion for and love to do?
                <br></br>A – Abilities - What natural talents and skills do I have?
                <br></br>P – Personality - Where does my personality best suit me to serve?
                <br></br>E – Experiences - What spiritual experiences have I had? What painful experiences
                have I had? What educational experiences have I had? What ministry experiences
                have I had?
            </p>
            <Link href={'/quiz'} className={styles.startBtn}>
                Start Quiz
            </Link>
        </div>
    )
}