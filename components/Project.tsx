import styles from "./Project.module.scss"

export default function Project() {
    return (
        <>
        <div className={styles.projectMainTitle}>Project</div>
        <div className={styles.container}>
            <div className={styles.camera}></div>
            <div className={styles.laptop}>
              <div className={styles.projectBox}>
                <div className={styles.projectTitleBox}>
                  <div className={styles.projectTitle}>추억을 담다</div>
                  <div>2021.12.01(1인 개인 프로젝트)</div>
                  <div>자세히 보기</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/6ad352f7-345b-412c-8452-5b45598ab674/image.png' alt=''/>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>즐겁게 식사도 하고 눈도 즐거웠던 장소를 사진과 함께 기록할 수 있는 사이트입니다</div>
                  <div className={styles.projectIntroTextBox}>
                    <div>주요기능</div>
                    <div>1</div>
                    <div>GitHub</div>
                    <div>2</div>
                    <div>Frontend</div>
                    <div>3</div>
                    <div>Backend</div>
                    <div>4</div>
                    <div>Deployment</div>
                    <div>5</div>
                  </div>
                </div>               
              </div>

              <div className={styles.projectBox}>
                <div className={styles.projectTitleBox}>
                  <div className={styles.projectTitle}>추억을 담다</div>
                  <div>2021.12.01(1인 개인 프로젝트)</div>
                  <div>자세히 보기</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/c2139268-56e9-46a6-a49b-71ecf20bacd1/image.png' alt=''/>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>즐겁게 식사도 하고 눈도 즐거웠던 장소를 사진과 함께 기록할 수 있는 사이트입니다</div>
                  <div className={styles.projectIntroTextBox}>
                    <div>주요기능</div>
                    <div>1</div>
                    <div>GitHub</div>
                    <div>2</div>
                    <div>Frontend</div>
                    <div>3</div>
                    <div>Backend</div>
                    <div>4</div>
                    <div>Deployment</div>
                    <div>5</div>
                  </div>
                </div>               
              </div>     

              <div className={styles.projectBox}>
                <div className={styles.projectTitleBox}>
                  <div className={styles.projectTitle}>추억을 담다</div>
                  <div>2021.12.01(1인 개인 프로젝트)</div>
                  <div>자세히 보기</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/764791df-8a00-4092-9d0d-5f7e2c314703/image.jpeg' alt=''/>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>즐겁게 식사도 하고 눈도 즐거웠던 장소를 사진과 함께 기록할 수 있는 사이트입니다</div>
                  <div className={styles.projectIntroTextBox}>
                    <div>주요기능</div>
                    <div>1</div>
                    <div>GitHub</div>
                    <div>2</div>
                    <div>Frontend</div>
                    <div>3</div>
                    <div>Backend</div>
                    <div>4</div>
                    <div>Deployment</div>
                    <div>5</div>
                  </div>
                </div>               
              </div>                     
            </div>                      
        </div>
        </>
    )
}