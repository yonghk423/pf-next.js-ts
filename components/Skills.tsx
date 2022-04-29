import styles from "./Skills.module.scss"

 export default function Skills() {
     return (
         <div className={styles.skillsBox}>
             <div className={styles.skillsTitle}>Skills</div>
             <div className={styles.skillsBoxList}>
                 <div>
                     <div>Front-end</div>
                     <div>JavaScript TypeScript CSS HTML ReactJS Redux.js Redux-Thunk Sass(SCSS) styled-components</div>
                 </div>
                 <div>
                     <div>Back-end</div>
                     <div>Node.js ExpressJS</div>
                 </div>
                 <div>
                     <div>Deployment</div>
                     <div>Vercel Heroku</div>
                 </div>
             </div>            
         </div>
     )
 } 