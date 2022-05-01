import styles from "./Project.module.scss"

export default function Project() {
    return (
        <>
        <div>Project</div>
        <div className={styles.container}>
            <div className={styles.camera}></div>
            <div className={styles.laptop}>
              <div className={styles.projectBox}>
                <div className={styles.projectTitleBox}>
                  <div className={styles.projectTitle}>추억을 담다</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/6ad352f7-345b-412c-8452-5b45598ab674/image.png' alt=''/>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}></div>
                  <p className={styles.projectIntroText}>테스트중. 테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중.테스트중. 테스트중.테스트중.테스트중.테스트중.</p>
                </div>
               
              </div>
                
            </div>                      
        </div>
        </>
    )
}