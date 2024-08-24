import styles from './home.module.css';

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.me}>
                <img className={styles.img} src="./img/me.png" alt="나" />
            </div>
                <div className={styles.profile}>
                <p>Back-end Devloper</p>
                <h1>길재혁</h1>
                <h2>안녕하세요. 3년차 백엔드 개발자 길재혁입니다.</h2>
                <div className={styles.contact}>
                <div className={styles.aboutMe}> 
                    <span>About me</span>
                    <p>
                        생년월일 : 99.11.25<br/>
                        이메일 : wogur2689@naver.com<br/>
                        최종학력 : 학점은행제 학사<br/>
                        경력 : SI 3년<br/>
                    </p>
                </div>
                <div className={styles.channel}>
                    <span>Channel</span>
                    <p>
                        Blog : <a href="https://blog.naver.com/wogur2689" className={styles.a}>https://blog.naver.com/wogur2689</a><br/>
                        Github : <a href="https://github.com/wogur2689" className={styles.a}>https://github.com/wogur2689</a>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}