import styles from "./Project.module.scss"

export default function Project() {
    return (
        <div className={styles.container}>
            <div className={styles.laptop}>
                <div className={styles.screen}></div>
                <div className={styles.base}></div>
            </div>            
        </div>
    )
}