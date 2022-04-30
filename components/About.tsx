import styles from "./About.module.scss"

 export default function About() {
    return (
      <div className={styles.aboutBox}>
        <div>about me</div>
        <div className={styles.aboutBoxList}>
            <div>
                <div>Contact</div>
                <div>010-4907-5443</div>
                <div>yonghk423423@gmail.com</div>
            </div>
            <div>
                <div>Archive</div>
                <div>깃허브 주소</div>
                <div>블로그 주소</div>
            </div>                 
        </div>           
    </div>
     )
 } 
