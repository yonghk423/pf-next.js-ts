import styles from "./Skills.module.scss"

 export default function Skills() {
     return (
         <div id="skills" className={styles.skillsBox}>
             <div className={styles.skillsTitle}>Skills</div>
             <div className={styles.skillsBoxList}>
                 <div className={styles.frontBox}>
                     <div className={styles.frontTitle}>Front-end</div>
                     <div className={styles.frontList}>
                         <div className={styles.js}>JavaScript, HTML, CSS</div>
                         <div className={styles.ts}>TypeScript, React.js, Next.js</div>
                         <div className={styles.redux}>Redux.js, Redux-Thunk, SWR</div>
                         <div className={styles.webpack}>webpack</div>
                         <div className={styles.scss}>Sass(SCSS), styled-components</div>
                     </div>
                 </div>
                 <div className={styles.backDeployBox}>
                     <div className={styles.backTitle}>Back-end</div>
                     <div className={styles.backList}>Node.js, Express.js</div>
                     <div className={styles.deployTitle}>Deployment</div>
                     <div className={styles.deployList}>S3, Vercel, Heroku</div>
                 </div>
             </div>            
         </div>
     )
 } 