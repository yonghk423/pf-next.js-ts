import styles from "./NavBar.module.scss";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 export default function Nav() {
  
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      pauseOnHover: true,
      arrows: false,
    };

     return (
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.navBar}>
            <div className={styles.navBarLogo}>yonghee&apos;Portfolio</div>
            <div className={styles.navBarMenu}>
              <div className={styles.navBarList}>Home</div>
              <div className={styles.navBarList}>About me</div>
              <div className={styles.navBarList}>Skills</div>
              <div className={styles.navBarList}>Projects</div>                         
            </div>
          </div>  
          <div className={styles.navBarProfileBox}>
            <div className={styles.navBarProfileName}>안녕하세요, <br></br> 프론트엔드 개발자 김용희입니다.</div>
            <div className={styles.navBarProfileIntroOne}>왜?라는 질문에 답을 얻는 과정을 지향하는 <br></br> 개발자가 되고자 합니다.</div>
            <div className={styles.navBarProfileIntroTwo}>빨리 가기보다는, 지치지 않고 멀리 가는 개발자를 꿈꿉니다.</div>
          </div>          
           {/* <Image
            src="/backgroundImg.jpeg"
            alt=""
            layout="fill" objectFit="cover" objectPosition="center"
          />                   */}
        </div>
        <div className={styles.sliderBox}>                
          <Slider {...settings}>
            <div className={styles.imgOneBox}>                
              <div className={styles.imgOne}>
                <Image
                src="/conversation.jpeg"
                alt=""
                layout="fill" objectFit="cover" objectPosition="center"
                />   
              </div>
              <div className={styles.imgOneIntroBox}>
                <div className={styles.imgOneIntroTitle}>소통하기 위해 노력합니다.</div>
                <div className={styles.imgOneIntro}>조직문화에 있어서 가장 중요한 부분중 하나가 원활한 소통이라고 생각합니다. 코드스테이츠 부트캠프 과정에서 페어 프로그래밍과 마지막 팀 프로젝트를 거치면서 개발하는데 있어서 소통은 개발 역량만큼 중요한 부분이라는 것을 많이 경험하게 되었습니다.</div>
              </div>
            </div>
            <div className={styles.imgTwoBox}>
              <div className={styles.imgTwo}>
                <Image
                src="/run.jpeg"
                alt=""
                layout="fill" objectFit="cover" objectPosition="center"
                />                 
              </div>
              <div className={styles.imgTwoIntroBox}>
                <div className={styles.imgTwoIntroTitle}>꾸준함의 가치를 믿습니다.</div>
                <div className={styles.imgTwoIntro}>사람마다 성장하는 속도는 다를수 있습니다 하지만 꾸준한 개발 학습과 개발과정을 기록하는 습관을 통해 꾸준히 성장하는 개발자가 되고 싶습니다.</div>
              </div>
            </div>
            <div className={styles.imgThrBox}>
              <div className={styles.imgThr}>
                <Image
                src="/nevergiveup.jpeg"
                alt=""
                layout="fill" objectFit="cover" objectPosition="center"
                />  
              </div>
              <div className={styles.imgThrIntroBox}>
                <div className={styles.imgThrIntroTitle}>쉽게 포기하지 않습니다.</div>
                <div className={styles.imgThrIntro}>개발하면서 문제가 생겼을 경우 해결하고자 하는 집념과 근성이 중요하다고 생각합니다. 특히 개인프로젝트를 하면서 반드시 해결해야 했던 과정들이 많았습니다. 포기하지 않고 구현했던 과정들을 생각하며 쉽게 포기하지 않았던 과정들이 조금씩 성장하는 계기가 되었던 것 같습니다.</div>
              </div>
            </div>          
          </Slider> 
        </div>  
      </div>  
    )
}