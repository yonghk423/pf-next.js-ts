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
      autoplaySpeed: 3000,
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
              <div>소통하기 위해 노력합니다.</div>
            </div>
            <div className={styles.imgTwoBox}>
              <div className={styles.imgTwo}>
                <Image
                src="/run.jpeg"
                alt=""
                layout="fill" objectFit="cover" objectPosition="center"
                />                 
              </div>
              <div>꾸준함 가치를 믿습니다.</div>
            </div>
            <div className={styles.imgThrBox}>
              <div className={styles.imgThr}>
                <Image
                src="/nevergiveup.jpeg"
                alt=""
                layout="fill" objectFit="cover" objectPosition="center"
                />  
              </div>
              <div>쉽게 포기하지 않습니다.</div>
            </div>          
          </Slider> 
        </div>  
      </div>  
    )
}