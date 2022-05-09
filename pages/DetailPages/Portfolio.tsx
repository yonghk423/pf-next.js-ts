import styles from "./Portfolio.module.scss"
import Head from 'next/head'
import { InterfacePortfolio } from "../../lib/InterfacePortfolio"
import { InferGetServerSidePropsType } from 'next'

export default function Portfolio({ data }:InferGetServerSidePropsType<typeof getServerSideProps> ) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Portfolio Page</title>
        </Head>
        <div className={styles.projectIntroBox}>
          <div className={styles.projectIntroTitle}>{data.projectIntroTitle}</div>
          <div className={styles.projectIntroExpTitle}>{data.projectIntroExpTitle}</div>
          <div className={styles.projectIntroExp}>{data.projectIntroExp}</div>
        </div>
          <div className={styles.ssrIntroBox}>
            <div className={styles.ssrIntroTitle}>{data.ssrIntroTitle}</div>
            <div className={styles.ssrIntro}>{data.ssrIntro}</div>
        </div>  
        <div className={styles.useRouterBox}>
          <div className={styles.useRouterIntroTitle}>{data.useRouterIntroTitle}</div>
          <div className={styles.useRouterIntro}>{data.useRouterIntro}</div>
        </div>
        <div className={styles.nextHeadBox}>
          <div className={styles.nextHeadIntroTitle}>{data.nextHeadIntroTitle}</div>
          <div className={styles.nextHeadIntro}>{data.nextHeadIntro}</div>
        </div>
        <div className={styles.nextImageBox}>
          <div className={styles.nextImageIntroTitle}>{data.nextImageIntroTitle}</div>
          <div className={styles.nextImageIntro}>{data.nextImageIntro}</div>
        </div>         
        <div className={styles.errorPageBox}>
          <div className={styles.errorPageIntroTitle}>{data.errorPageIntroTitle}</div>
          <div className={styles.errorPageIntro}>{data.errorPageIntro}</div>
        </div>        
      </div>
    )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://yonghee-portfolio.herokuapp.com/detailPagesPortFolio')
  const data:InterfacePortfolio = await res.json()
  console.log(data)
  return {
    props: {
      data,
    },
  }
}