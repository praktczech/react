import styles from './Nav.module.css'

function Nav() {
    return (
        <nav className={styles.navi}>
            <ul className={styles.ul}>
                <li><a className={styles.a}> O studiuję IT</a></li>
                <li> <a className={styles.a}>Ścieżki nauki</a></li>
                <li><a className={styles.a}> dla kogo studiuję IT</a></li>
                <li><a className={styles.a}>przednioty</a></li>
                <li><a className={styles.a}>kontakt</a></li>
                <li><a className={styles.a}>zaloguj się</a></li>
            </ul>
        </nav>
    );
}
export default Nav

