import styles from "./About.module.scss"
import Link from 'next/link';

 export default function About() {
    return (
      <div id="about" className={styles.aboutBox}>
        <div className={styles.aboutTitle}>About me</div>
        <div className={styles.aboutBoxList}>
            <div className={styles.contactBox}>
                <div className={styles.contact}>Contact</div>
                <div className={styles.number}>010-4907-5443๐</div>
                <div className={styles.email}>yonghk423423@gmail.com๐ฌ</div>
                <div className={styles.code}>์ฝ๋์คํ์ด์ธ  ๋ถํธ์บ ํ ์๋ฃ(2021.06 - 2021.11)๐ชช</div>
                <div className={styles.uni}>์ธ์ข๋ํ๊ต(๋ฌผ๋ฆฌํ๊ณผ, ๋ณต์์ ๊ณต(์ ์๊ณตํ๊ณผ))๐ง๐ปโ๐</div>
            </div>
            <div className={styles.archiveBox}>
              <div className={styles.archive}>Archive</div>
              <Link href={'https://github.com/yonghk423'}>
                <a><div className={styles.github}>Github๐ป</div></a>
              </Link>
              <Link href={'https://velog.io/@yonghk423'}>
                <a><div className={styles.github}>Blog๐</div></a>
              </Link>                
            </div>                 
        </div>           
    </div>
     )
 } 
