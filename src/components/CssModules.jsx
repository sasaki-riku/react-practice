import styles from "../css/CssModules.module.scss"

export const CssModules = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>CSS Modulesです</p>
            <button className={styles.button}>ボタン</button>
        </div>
    )
}