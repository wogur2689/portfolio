import styles from './projects.module.css';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <div className={styles.project_list}>
                <div className={styles.project}>
                    <img src="./img/project/MusicWeb.png" alt="음악사이트"/>
                    <span><a href="">Music Web</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/project/Plant.png" alt="식물사전앱"/>
                    <span><a href="">Plant App</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/project/Chatting.png" alt="채팅"/>
                    <span><a href="">Mini Chatting</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/project/DMCSite.png" alt="DMCSite"/>
                    <span><a href="">DMC Site</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/project/DMCAPP.png" alt="DMCAPP"/>
                    <span><a href="">DMC APP</a></span>
                </div>
                <div className={styles.project}>
                    <img src="./img/project/dadok.png" alt="DadokDadok"/>
                    <span><a href="">Dadok Dadok</a></span>
                </div>
            </div>
        </section>
    );
}