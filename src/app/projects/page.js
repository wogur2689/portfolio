import styles from './projects.module.css';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <div className={styles.project_list}>
                <div className={styles.project}>
                    <img src="./img/MusicWeb.png" alt="음악사이트"/>
                    <span><a href="">Music Web</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/Plant.png" alt="식물사전앱"/>
                    <span><a href="">Plant App</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/Plant.png" alt="식물사전앱"/>
                    <span><a href="">Plant App</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/Plant.png" alt="식물사전앱"/>
                    <span><a href="">Plant App</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/Plant.png" alt="식물사전앱"/>
                    <span><a href="">Plant App</a></span>
                </div>
            </div>
        </section>
    );
}