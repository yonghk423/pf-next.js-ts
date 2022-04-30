import styles from "./Project.module.scss"

export default function Project() {
    return (
        <>
        <div>Project</div>
        <div className={styles.container}>
            <div className={styles.camera}></div>
            <div className={styles.laptop}>
              <div className={styles.projectBox}>
                <div className={styles.projectTitle}>1</div>
                <div className={styles.projectImg}>2</div>
                <div className={styles.projectIntro}>3</div>
                <div className={styles.projectSkills}>4</div>
              </div>
            </div>                      
        </div>
        </>
    )
}