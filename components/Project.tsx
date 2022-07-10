import styles from "./Project.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  const onClickBaeChuMarket = () => {
    router.push('https://velog.io/@yonghk423?tag=baechu-market')
  }
  
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
        <div id="projects" className={styles.projectMainTitle}>Project</div>
        <div className={styles.container}>
            <div className={styles.camera}></div>
            <div className={styles.laptop}>

              <div className={styles.projectTitleBox}>
                <div className={styles.projectTitlebae}>배추마켓 온라인 마켓 서비스 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.5.25(1인 개인 프로젝트)</div>
                <Link href={'https://velog.io/@yonghk423?tag=baechu-market'}>
                  <a><div className={styles.projectDetailbae}>자세히 보기</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>            
                <div onClick={onClickBaeChuMarket} className={styles.projectImg}>
                  <Image src="/baechumarket.jpeg" alt="" layout="fill"/>  
                </div>                   
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>프론트엔드 개발자로서 api 요청을 통한 <strong>데이터 관리</strong>를 할 수 있는 능력을 향상 시키고자 하였습니다. <br></br> <strong> 풀스텍 기반의 웹사이트를 완성한다는 도전 </strong> 은 쉽지 않았으나 <strong>Next.js 에서 제공하는 API Routes</strong> 와 비테스(Vitess) 기반의 MySQL 호환 <strong>서버리스</strong> 데이터베이스 플랫폼인 planetscale을 사용하여 까다로운 서버 관리 파트를 최소화 시킴으로서 <strong>api 와 연동</strong>하는 웹사이트를 개발 할 수 있었습니다. 또한 <strong>data fetching 라이브러리</strong>인 <strong>SWR</strong>을 사용하여 데이터 캐싱의 장점을 직접 경험 할수 있었습니다. <strong>프론트엔드와 백엔드의 큰 흐름을 경험</strong>하게 된 큰 경험이었으며 현재도 성능 최적화와 리팩터링를 하며 역량을 키우고 있습니다. </div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>상품 업로드 및 Q&A 소통 기능</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <Link href={'https://github.com/yonghk423/next.js-market'}>
                      <a><div className={styles.projectIntroGitHub}>https://github.com/yonghk423/next.js-market</div></a>
                    </Link>
                    <div className={styles.projectIntroURL}>URL</div>
                    <Link href={'https://next-js-market.vercel.app/Login'}>
                      <a><div className={styles.projectIntroGitHub}>https://next-js-market.vercel.app/Login</div></a>
                    </Link>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      TypeScript, Next.js, React Hooks API, SWR, styled-components,
                    </div>
                    <div className={styles.projectIntroBack}>Backend</div>
                    <div className={styles.projectIntroBack}>
                      Next.js, Prisma, Nodemailer, iron-session
                    </div>
                    <div className={styles.projectIntroDatabase}>database</div>
                    <div className={styles.projectIntroDatabase}>planetscale</div>
                    <div className={styles.projectIntroDeploy}>Deployment</div>
                    <div className={styles.projectIntroDeploy}>Vercel</div>
                  </div>
                </div>               
              </div>


              <div className={styles.projectTitleBox}>
                <div className={styles.projectTitleport}>포트폴리오 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.4.01(1인 개인 프로젝트)</div>
                <Link href={'/DetailPages/Portfolio'}>
                  <a><div className={styles.projectDetailport}>자세히 보기</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>            
                <div onClick={onClickPortfolio} className={styles.projectImg}>
                  <Image src="/portfolio.jpeg" alt="" layout="fill"/>  
                </div>                   
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>이번 포트폴리오 웹사이트는 <strong>Next.js 프레임워크</strong> 를 사용하였습니다. <strong>React.js 라이브러리와 비교</strong> 하며 이해도를 높이고 <strong>SEO가 무엇인지</strong> 공부하며 DetailPage(자세히 보기)는 <strong> SSR 방식을 도입</strong> 함으로써 Next.js의 장점을 경험하고자 노력하였습니다.</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>프로젝트 소개</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <Link href={'https://github.com/yonghk423/pf-next.js-ts'}>
                      <a><div className={styles.projectIntroGitHub}>https://github.com/yonghk423/pf-next.js-ts</div></a>
                    </Link>
                    <div className={styles.projectIntroURL}>URL</div>
                    <Link href={'https://pf-next-js-ts.vercel.app'}>
                      <a><div className={styles.projectIntroGitHub}>https://pf-next-js-ts.vercel.app</div></a>
                    </Link>
                    <div className={styles.projectIntroFront}>Frontend</div>
                    <div className={styles.projectIntroFront}>
                      TypeScript, Next.js, Sass(SCSS)
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
                <div className={styles.projectTitlekeep}>추억을 담다 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.12.01(1인 개인 프로젝트)</div>
                <Link href={'/DetailPages/KeepMemories'}>
                  <a><div className={styles.projectDetailkeep}>자세히 보기</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>                
                <div onClick={onClickKeepMemories} className={styles.projectImg}>
                  <Image src="/keepmemory.jpeg" alt="" layout="fill"/>  
                </div>               
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}>개인프로젝트를 통해 <strong>React</strong> 에 대한 기존에 알고 있던 <strong>지식을 활용</strong> 하고 <strong>기능을 구현함</strong>으로써 <strong>개발 숙련도의 향상</strong>과 <strong>상태 관리의 중요성</strong> 을 다시 깊게 이해하기 위해서 시작 하였습니다. 또한 카페마다 감성을 담은 사진을 찍는것을 좋아하다보니 이것을 컨셉으로 해서 웹사이트를 만들면 좋을 것 같다는 생각으로 웹사이트를 개발하게 되었습니다.</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>사진 업로드 및 글 작성 기능, 즐겨찾기 추가 기능</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <Link href={'https://github.com/yonghk423/keep-memories'}>
                      <a><div className={styles.projectIntroGitHub}>https://github.com/yonghk423/keep-memories</div></a>
                    </Link>
                    <div className={styles.projectIntroURL}>URL</div>
                    <Link href={'https://market-list-eight.vercel.app'}>
                      <a><div className={styles.projectIntroGitHub}>https://market-list-eight.vercel.app</div></a>
                    </Link>
                    <div className={styles.projectIntroMajor}>velog</div>
                    <Link href={'https://velog.io/@yonghk423?tag=%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8'}>
                      <a><div className={styles.projectIntroMajor}>프로젝트 회고</div></a>
                    </Link>  
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
                <div className={styles.projectTitlenara}>나랏말싸미 웹사이트</div>
                <div className={styles.projectSubTitle}>2021.11 - 2021.12(4인/4주)</div>
                <Link  href={'/DetailPages/NaraMal'}>
                  <a><div className={styles.projectDetailnara}>자세히 보기(맡은 포지션 및 역할)</div></a>
                </Link>
              </div>
              <div className={styles.projectBox}>               
                <div onClick={onClickNaraMal} className={styles.projectImg}>
                  <Image src="/naramal.jpeg" alt="" layout="fill"/>  
                </div>
                <div className={styles.projectIntroBox}>
                  <div className={styles.projectIntro}> <strong>협업에서 중요한 소통과 맡은 역할에 대한 책임감</strong>을 느끼는 소중한 기회이자 경험이었습니다. 나랏말싸미는 우리말을 재밌게 배워 바르게 쓸 수 있도록 관련된 퀴즈를 제공하는 사이트입니다. 직접 퀴즈를 만들수 있으며 흥미를 유발하고 퀴즈를 풀고 맞춤에 따라 마일리지를 얻어 활용할 수 있는 즐거움을 배로 증가 시킬 것 입니다.</div>
                  <div className={styles.projectIntroTextBox}>
                    <div className={styles.projectIntroMajor}>주요기능</div>
                    <div className={styles.projectIntroMajor}>퀴즈 만들기, 퀴즈 맞추기, 마일리지를 이용한 상품구매</div>
                    <div className={styles.projectIntroGitHub}>GitHub</div>
                    <Link href={'https://github.com/codestates/TheKing-sLetters'}>
                      <a><div className={styles.projectIntroGitHub}>https://github.com/codestates/TheKing-sLetters</div></a>
                    </Link>
                    <div className={styles.projectIntroURL}>URL</div>
                    <Link href={'https://thekingsletters.ml'}>
                      <a><div className={styles.projectIntroGitHub}>https://thekingsletters.ml</div></a>
                    </Link>
                    <div className={styles.projectIntroMajor}>velog</div>
                    <Link href={'https://velog.io/@yonghk423?tag=4%EC%A3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8'}>
                      <a><div className={styles.projectIntroMajor}>프로젝트 회고</div></a>
                    </Link> 
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