import styles from './career.module.css';

export default function Career() {
    return (
        <>
            <h1 className={styles.ht}>Career</h1>
            <section className={styles.career}>
                <div className={styles.school}>
                <div className={styles.career_title}>
                    <h2>School</h2>
                </div>
                <div className={styles.career_content}>
                    <img src="./img/School1.png" alt="학점은행제"/>
                    <p>
                        학점은행제(편입)<br/>
                        2023.08 ~ 2024.08<br/>
                        컴퓨터공학 학사졸업
                    </p>
                </div>
                <div className={styles.career_content}>
                    <img src="./img/School2.png" alt="동양미래대학교"/>
                    <p>
                        동양미래대학교<br/>
                        2018.02 ~ 2022.02<br/>
                        컴퓨터정보공학 졸업
                    </p>
                </div>
                </div>
                <div className={styles.certificate}>
                    <h2>Certificate</h2>
                    <img src="./img/Qnet.png" alt="큐넷"/>
                    <p>
                        정보처리산업기사<br/>
                        2023.09
                    </p>
                </div>
                <div className={styles.company}>
                    <h2>Company</h2>
                    <img src="./img/company1.png" alt="크림솔루션"/>
                    <p>
                        (주)크림솔루션<br/>
                        2021.12 ~ 재직<br/>
                        개발본부 웹개발자 대리
                    </p>
                </div>
            </section>
        </>
    );
}