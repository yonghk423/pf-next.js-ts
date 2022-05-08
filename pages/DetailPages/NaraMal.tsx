import styles from "./NaraMal.module.scss"
import { InterfaceNara } from "../../lib/InterfaceNara";
import { InferGetServerSidePropsType } from 'next'

export default function NaraMal({ data }:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
      <div className={styles.container}>   
        <div className={styles.projectIntroBox}>
          <div className={styles.projectIntroTitle}>{data.projectIntroTitle}</div>
          <div className={styles.projectIntroExpTitle}>{data.projectIntroExpTitle}</div>
          <div className={styles.projectIntroExp}>{data.projectIntroExp}</div>
        </div>
        <div className={styles.projectExplainBox}>
          <div className={styles.projectIntroOneBox}>            
            <div className={styles.projectIntroOneTitle}>{data.projectIntroOneTitle}</div>
            <div className={styles.projectIntroOne}>{data.projectIntroOne}</div>
          </div>  
          <div className={styles.projectIntroTwoBox}>
            <div className={styles.projectIntroTwoTitle}>{data.projectIntroTwoTitle}</div>
            <div className={styles.projectIntroTwoTitleAxios}>{data.projectIntroTwoTitleAxios}</div>
            <div className={styles.projectIntroTwoAxios}>{data.projectIntroTwoAxios}</div>
            <div className={styles.projectIntroTwoTitleUseState}>{data.projectIntroTwoTitleUseState}</div>
            <div className={styles.projectIntroTwoUseState}>{data.projectIntroTwoUseState}</div>
            <div className={styles.projectIntroTwoTitleUseEffect}>{data.projectIntroTwoUseEffect}</div>
            <div className={styles.projectIntroTwoUseEffect}>{data.projectIntroTwoUseEffect}</div>
          </div>
          <div className={styles.projectIntroThrBox}>  
            <div className={styles.projectIntroThrTitle}>{data.projectIntroThrTitle}</div>
            <div className={styles.projectIntroThrTitleModalUi}>{data.projectIntroThrTitleModalUi}</div>
            <div className={styles.projectIntroThrModalUi}>{data.projectIntroThrModalUi}</div>
          </div>
          <div className={styles.projectIntroFourBox}>  
            <div className={styles.projectIntroFourTitle}>{data.projectIntroFourTitle}</div>
            <div className={styles.projectIntroFourHookApi}>{data.projectIntroFourHookApi}</div>
          </div> 
          <div className={styles.projectIntroFiveBox}> 
            <div className={styles.projectIntroFiveTitle}>{data.projectIntroFiveTitle}</div>
            <div className={styles.projectIntroFiveInfoUis}>{data.projectIntroFiveInfoUis}</div>
          </div>  
        </div>
        </div>
    )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://yonghee-portfolio.herokuapp.com/detailPagesNaraMal')
  const data: InterfaceNara = await res.json()
  console.log(data)
  return {
    props: {
      data,
    },
  }
}