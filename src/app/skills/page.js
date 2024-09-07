import styles from './skills.module.css';

export default function Skills() {
    return <>
        <section className={styles.Skills}>
            <div className={styles.it_item}>BackEnd</div>
            <div className={styles.it_item}>DataBase</div>
            <div className={styles.it_item}>FrontEnd</div>
            <div className={styles.it_item}>Deployment</div>
            <div className={styles.it_item}>Mobile</div>
        </section>
        <section className={styles.codingSkill}>
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/Spring.png" alt="Spring" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/Node.png" alt="Nodejs" />
                </div>
            </div>
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/Oracle.png" alt="Oracle" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/MySQL.png" alt="MySQL" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/PostgreSQL.png" alt="postgreSQL" />
                </div>
            </div>
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/FrontEnd.png" alt="react" />
                </div>
            </div>
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/AWS.png" alt="aws" />
                </div>
            </div>
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/Mobile.png" alt="android" />
                </div>
            </div>
        </section>
    </>
}