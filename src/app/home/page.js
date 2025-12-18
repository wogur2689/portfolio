import styles from './home.module.css';

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.homeTop}>
                {/* <div className={styles.me}>
                    <img className={styles.img} src="./img/me.png" alt="나" />
                </div> */}
                <div className={styles.profile}>
                    <p>Back-end Devloper</p>
                    <h1>길재혁</h1>
                    <h2>SI 환경에서 Spring 기반 웹·API 개발과<br></br>
                    운영/배포까지 경험한 4년 차 백엔드 개발자입니다.</h2>
                    <div className={styles.contact}>
                        <div className={styles.aboutMe}> 
                            <span>About me</span>
                            <p>
                                이메일 : wogur2689@naver.com<br/>
                                최종학력 : 학점은행제 학사<br/>
                                경력 : SI 4년<br/>
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
            </div>
            <p className={styles.intro}>
                서비스는 결국 운영되는 코드 라고 생각합니다.<br></br>
                그래서 저는 구현보다 운영 이후를 먼저 고민합니다.<br></br>
                장애 상황, 성능 저하, 데이터 증가와 같은<br></br>
                현실적인 문제를 기준으로 서버를 설계해왔습니다.<br></br>
            </p>
        </section>
    );
}