import styles from "./About.module.scss"

 export default function About() {
     return (
         <div className={styles.aboutBox}>
             <div>about me</div>
             <div className={styles.aboutBoxList}>
                 <div>
                     <div>이름</div>
                     <div>김용희</div>
                 </div>
                 <div>
                     <div>생년월일</div>
                     <div>91.04.23</div>
                 </div>
                 <div>
                     <div>주소지</div>
                     <div>서울시 노원구</div>
                 </div>
                 <div>
                     <div>연락처</div>
                     <div>010-4907-5443</div>
                 </div>
                 <div>
                     <div>이메일</div>
                     <div>yonghk423423@gmail.com</div>
                 </div>
                 <div>
                     <div>학력</div>
                     <div>세종대학교(물리학,전자공학(복수전공))</div>
                 </div>
             </div>           
         </div>
     )
 } 
