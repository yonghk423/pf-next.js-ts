import styles from "./NavBar.module.scss";
import Image from 'next/image';
 export default function Nav() {
     return (
       <div>
         <div className={styles.background}>
          <div className={styles.navBar}>
             <div className={styles.navBarLogo}>yonghee&apos;Portfolio</div>
             <div className={styles.navBarMenu}>
               <div className={styles.navBarList}>About me</div>
               <div className={styles.navBarList}>Skills</div>
               <div className={styles.navBarList}>Projects</div>
               {/* <div className={styles.navBarList}>Career</div> */}           
             </div>
            </div>  
          <div className={styles.navBarProfileBox}>
            <div className={styles.navBarProfileName}>안녕하세요, <br></br> 프론트엔드 개발자 김용희입니다.</div>
            <div className={styles.navBarProfileIntroOne}>왜?라는 질문에 답을 얻는 과정을 지향하는 개발자가 되고자 합니다.</div>
            <div className={styles.navBarProfileIntroTwo}>빨리 가기보다는, 지치지 않고 멀리 가는 개발자를 꿈꿉니다.</div>
          </div>          
           <Image
             src="/backgroundImg.jpeg"
             alt=""
            layout="fill" objectFit="cover" objectPosition="center"
          />                  
        </div>
      </div>  
    )
}