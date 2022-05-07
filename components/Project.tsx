import styles from "./Project.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();
  
  const onClickPortfolio = () => {
    router.push('/DetailPages/Portfolio')
  }

  const onClickKeepMemories = () => {
    router.push('/DetailPages/KeepMemories')
  }

  const onClickNaraMal = () => {
    router.push('/DetailPages/NaraMal')
  }
    return (
        <>
        <div className={styles.projectMainTitle}>Project</div>
        <div className={styles.container}>
            <div className={styles.camera}></div>
            <div className={styles.laptop}>
              <div className={styles.projectTitleBox}>
                <div className={styles.projectTitle}>포트폴리오 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.12.01(1인 개인 프로젝트)</div>
                <Link href={'/DetailPages/Portfolio'}>
                  <a><div className={styles.projectDetail}>자세히 보기</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>            
                <div onClick={onClickPortfolio} className={styles.projectImg}>
                  <Image src="/portfolio.jpeg" alt="" layout="fill"/>  
                </div>                   
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>이번 포트폴리오 웹사이트는 Next.js 프레임워크를 사용하였습니다. React.js 라이브러리와 비교하며 이해도를 높이고 SEO 최적화와 SSR 방식을 도입함으로써 Next.js의 장점을 경험하고자 노력하였습니다.</div>
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

              <div className={styles.projectTitleBox}>
                <div className={styles.projectTitle}>추억을 담다 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.12.01(1인 개인 프로젝트)</div>
                <Link href={'/DetailPages/KeepMemories'}>
                  <a><div className={styles.projectDetail}>자세히 보기</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>                
                <div onClick={onClickKeepMemories} className={styles.projectImg}>
                  <Image src="/keepmemory.jpeg" alt="" layout="fill"/>  
                </div>               
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>커피를 워낙 좋아하다 보니 카페를 자주가곤 합니다. 카페마다 감성을 담은 사진을 찍는것을 좋아하다보니 이것을 컨셉으로 해서 웹사이트를 만들면 좋을 것 같다는 생각으로 웹사이트를 개발하게 되었습니다.</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>사진 업로드 및 글 작성 기능, 즐겨찾기 추가 기능</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <div className={styles.projectIntroGitHub}>링크</div>
                    <div className={styles.projectIntroURL}>URL</div>
                    <div className={styles.projectIntroURL}>링크</div>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      TypeScript, React.js, React Hooks API, Redux.js, <br></br> Redux-Thunk, Axios, Sass(SCSS)
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

              <div className={styles.projectTitleBox}>
                <div className={styles.projectTitle}>나랏말싸미 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.11 - 2021.12(4인/4주)</div>
                <Link  href={'/DetailPages/NaraMal'}>
                  <a><div className={styles.projectDetail}>자세히 보기(맡은 포지션 및 역할)</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>               
                <div onClick={onClickNaraMal} className={styles.projectImg}>
                  <Image src="/naramal.jpeg" alt="" layout="fill"/>  
                </div>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>나랏말싸미는 우리말을 재밌게 배워 바르게 쓸 수 있도록 관련된 퀴즈를 제공하는 사이트입니다. 직접 퀴즈를 만들수 있으며 흥미를 유발하고 퀴즈를 풀고 맞춤에 따라 마일리지를 얻어 활용할 수 있는 즐거움을 배로 증가 시킬 것 입니다.</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>퀴즈 만들기, 퀴즈 맞추기, 마일리지를 이용한 상품구매</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <div className={styles.projectIntroGitHub}>링크</div>
                    <div className={styles.projectIntroURL}>URL</div>
                    <div className={styles.projectIntroURL}>링크</div>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      JavaScript, React.js, React Hooks API, Axios <br></br> React Router, Styled-Components
                    </div>
                    <div className={styles.projectIntroBack}>Backend</div>
                    <div className={styles.projectIntroBack}>
                      Node.js, Express.js, Nodemailer, JWT, OAuth <br></br>  Sequelize, MySQL
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