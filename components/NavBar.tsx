import styles from "./NavBar.module.scss";
import Image from 'next/image';
 export default function Nav() {
     return (
       <div>
         <div className={styles.background}>
           <div className={styles.navBar}>
             <div className={styles.navBarLogo}>yong hee</div>
             <div className={styles.navBarMenu}>
               <div className={styles.navBarList}>About me</div>
               <div className={styles.navBarList}>Skills</div>
               <div className={styles.navBarList}>Projects</div>
               <div className={styles.navBarList}>Career</div>
             </div>
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