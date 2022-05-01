import styles from "./About.module.scss"

 export default function About() {
    return (
      <div className={styles.aboutBox}>
        <div className={styles.aboutTitle}>About me</div>
        <div className={styles.aboutBoxList}>
            <div className={styles.contactBox}>
                <div className={styles.contact}>Contact</div>
                <div className={styles.number}>010-4907-5443</div>
                <div className={styles.email}>yonghk423423@gmail.com</div>
                <div className={styles.code}>코드스테이츠 부트캠프 수료(2021.06 - 2021.11)</div>
                <div className={styles.uni}>세종대학교(물리학과, 복수전공(전자공학과))</div>
            </div>
            <div className={styles.archiveBox}>
                <div className={styles.archive}>Archive</div>
                <div className={styles.github}>깃허브 주소</div>
                <div className={styles.blog}>블로그 주소</div>
            </div>                 
        </div>           
    </div>
     )
 } 
