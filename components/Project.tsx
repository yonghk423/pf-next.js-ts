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
                  <div className={styles.projectTitle}>포트폴리오 웹사이트</div>
                  <div className={styles.projectSubTitle}>2021.12.01(1인 개인 프로젝트)</div>
                  <div className={styles.projectDetail}>자세히 보기</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/764791df-8a00-4092-9d0d-5f7e2c314703/image.jpeg' alt=''/>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>포트폴리오 웹사이트</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>사진 업로드 및 글 작성 기능, 즐겨찾기 추가 기능</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <div className={styles.projectIntroGitHub}>링크</div>
                    <div className={styles.projectIntroURL}>URL</div>
                    <div className={styles.projectIntroURL}>링크</div>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      TypeScript, Next.js, Axios, Sass(SCSS)
                    </div>
                    <div className={styles.projectIntroBack}>Backend</div>
                    <div className={styles.projectIntroBack}>
                      Node.js, Express.js,
                    </div>
                    <div className={styles.projectIntroDeploy}>Deployment</div>
                    <div className={styles.projectIntroDeploy}>Vercel, Heroku</div>
                  </div>
                </div>               
              </div>

              <div className={styles.projectBox}>
                <div className={styles.projectTitleBox}>
                  <div className={styles.projectTitle}>추억을 담다 웹사이트</div>
                  <div className={styles.projectSubTitle}>2021.12.01(1인 개인 프로젝트)</div>
                  <div className={styles.projectDetail}>자세히 보기</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/6ad352f7-345b-412c-8452-5b45598ab674/image.png' alt=''/>
               <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>즐겁게 식사도 하고 눈도 즐거웠던 장소를 사진과 함께 기록할 수 있는 사이트입니다</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>사진 업로드 및 글 작성 기능, 즐겨찾기 추가 기능</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <div className={styles.projectIntroGitHub}>링크</div>
                    <div className={styles.projectIntroURL}>URL</div>
                    <div className={styles.projectIntroURL}>링크</div>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      TypeScript, React.js, React Hooks API, Redux.js, Redux-Thunk, Axios, Sass(SCSS)
                    </div>
                    <div className={styles.projectIntroBack}>Backend</div>
                    <div className={styles.projectIntroBack}>
                      Node.js, Express.js,
                    </div>
                    <div className={styles.projectIntroDeploy}>Deployment</div>
                    <div className={styles.projectIntroDeploy}>Vercel, Heroku</div>
                  </div>
                </div>                
              </div>     

              <div className={styles.projectBox}>
                <div className={styles.projectTitleBox}>
                  <div className={styles.projectTitle}>나랏말싸미 웹사이트</div>
                  <div className={styles.projectSubTitle}>2021.11 - 2021.12((4인/4주))</div>
                  <div className={styles.projectDetail}>자세히 보기(맡은 포지션 및 역할)</div>
                </div>
                <img className={styles.projectImg}src='https://velog.velcdn.com/images/yonghk423/post/c2139268-56e9-46a6-a49b-71ecf20bacd1/image.png' alt=''/>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>나랏말싸미는 우리말을 재밌게 배워 바르게 쓸 수 있도록 관련된 퀴즈를 제공하는 사이트입니다</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>퀴즈 만들기, 퀴즈 맞추기, 마일리지를 이용한 상품구매</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <div className={styles.projectIntroGitHub}>링크</div>
                    <div className={styles.projectIntroURL}>URL</div>
                    <div className={styles.projectIntroURL}>링크</div>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      JavaScript, React.js, React Hooks API, Axios,React Router, Styled-Components
                    </div>
                    <div className={styles.projectIntroBack}>Backend</div>
                    <div className={styles.projectIntroBack}>
                      Node.js, Express.js, Nodemailer, JWT, OAuth, Sequelize, MySQL
                    </div>
                    <div className={styles.projectIntroDeploy}>Deployment</div>
                    <div className={styles.projectIntroDeploy}>AWS</div>
                  </div>
                </div>                 
              </div>                     
            </div>                      
        </div>
        </>
    )
}