import styles from "./Project.module.scss"

export default function Project() {
    return (
        <>
        <div>Skills</div>
        <div className={styles.container}>
            <div className={styles.camera}></div>
            <div className={styles.laptop}>box</div>                      
        </div>
        </>
    )
}