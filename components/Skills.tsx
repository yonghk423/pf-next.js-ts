import styles from "./Skills.module.scss"

 export default function Skills() {
     return (
         <div className={styles.skillsBox}>
             <div className={styles.skillsTitle}>Skills</div>
             <div className={styles.skillsBoxList}>
                 <div className={styles.frontBox}>
                     <div className={styles.frontTitle}>Front-end</div>
                     <div className={styles.frontList}>
                         <div className={styles.js}>JavaScript, HTML, CSS</div>
                         <div className={styles.ts}>TypeScript, ReactJS, Next.js</div>
                         <div className={styles.redux}>Redux.js, Redux-Thunk</div>
                         <div className={styles.scss}>Sass(SCSS), styled-components</div>
                     </div>
                 </div>
                 <div className={styles.backDeployBox}>
                     <div className={styles.backTitle}>Back-end</div>
                     <div className={styles.backList}>Node.js, ExpressJS</div>
                     <div className={styles.deployTitle}>Deployment</div>
                     <div className={styles.deployList}>Vercel, Heroku</div>
                 </div>
             </div>            
         </div>
     )
 } 