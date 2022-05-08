import styles from "./Portfolio.module.scss"
import Head from 'next/head'

export default function Portfolio() {
    return (
      <div className={styles.container}>
      <Head>
        <title>Portfolio Page</title>
      </Head>
          <div className={styles.projectIntroBox}>
          <div className={styles.projectIntroTitle}>포트폴리오 웹사이트</div>
          <div className={styles.projectIntroExpTitle}>프로젝트를 통해 얻은 것</div>
          <div className={styles.projectIntroExp}></div>
        </div>
      </div>
    )
}