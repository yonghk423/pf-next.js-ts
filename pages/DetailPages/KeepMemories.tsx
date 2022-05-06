import styles from "./keepMemories.module.scss"
import { InferGetServerSidePropsType } from 'next'
import { InterfaceKeep } from "../interface/InterfaceKeep"

export default function KeepMemories({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log(data);
  return (      
      <div className={styles.container}>        
        <div className={styles.projectIntroBox}>
          <div className={styles.projectIntroTitle}>{data.projectIntroTitle}</div>
          <div className={styles.projectIntroDeploy}>{data.projectIntroDeploy}</div>
          <div className={styles.projectIntroExpTitle}>{data.projectIntroExpTitle}</div>
          <div className={styles.projectIntroExp}>{data.projectIntroExp}</div>
        </div>
        <div className={styles.projectExplainBox}>
          <div className={styles.typeScriptBox}>
            <div className={styles.typeScriptMainTitle}>{data.typeScriptMainTitle}</div>
            <div className={styles.typeScriptTitleOne}>{data.typeScriptTitleOne}</div>
            <div className={styles.typeScriptTitleOneIntro}>{data.typeScriptTitleOneIntro}</div>
            <div className={styles.typeScriptTitleTwo}>자바스크립트 호환</div>
            <div className={styles.typeScriptTitleTwoIntro}>타입스크립트는 자바스크립트와 100% 호환됩니다. 따라서 프론트엔드 또는 백엔드 어디든 자바스크립트를 사용할 수 있는 곳이라면 타입스크립트도 쓸 수 있습니다. 타입스크립트는 앱과 웹을 구현하는 자바스크립트와 동일한 용도로 사용 가능하며 서버 단에서 개발이 이루어지는 복잡한 대형 프로젝트에서도 빛을 발합니다.              
            </div>
            <div className={styles.typeScriptTitleThr}>{data.typeScriptTitleThr}</div>
            <div className={styles.typeScriptTitleThrIntro}>{data.typeScriptTitleThrIntro}</div>
          </div>

          <div className={styles.reduxBox}>
            <div className={styles.reduxTitle}>{data.reduxTitle}</div>
            <div className={styles.reduxIntro}>{data.reduxIntro}</div>
          </div>  
          <div className={styles.functionIntroBox}>
            <div className={styles.functionIntroTitleOne}>{data.functionIntroTitleOne}</div>
            <div className={styles.functionIntroOne}>{data.functionIntroOne}</div>
            <div className={styles.functionIntroTitleTwo}>{data.functionIntroTitleTwo}</div>
            <div className={styles.functionIntroTwo}>{data.functionIntroTwo}</div>
            <div className={styles.functionIntroTitleThr}>사진 세부 정보 확인, 즐겨찾기 추가, 글 작성 및 삭제</div>
            <div className={styles.functionIntroThr}>{data.functionIntroThr}</div>
            <div className={styles.functionIntroTitleFour}>{data.functionIntroFour}</div>
            <div className={styles.functionIntroFour}>{data.functionIntroFour}</div>
            <div className={styles.functionIntroTitleFive}>{data.functionIntroTitleFive}</div>
            <div className={styles.functionIntroFive}>{data.functionIntroFive}</div>
          </div>  
        </div>
      </div>
    )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://yonghee-portfolio.herokuapp.com/detailPagesKeepMemories')
  const data:InterfaceKeep = await res.json()
  console.log(data)
  return {
    props: {
      data,
    },
  }
}

