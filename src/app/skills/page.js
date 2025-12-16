import styles from './skills.module.css';

export default function Skills() {
    return <>
        <h1 className={styles.ht}>Skills</h1>
        <div className={styles.skillsLayout}>
        <section className={styles.Skills}>
            <div className={styles.it_item}>BackEnd</div>
            <div className={styles.it_item}>DataBase</div>
            <div className={styles.it_item}>FrontEnd</div>
            <div className={styles.it_item}>Deployment</div>
            <div className={styles.it_item}>Mobile</div>
        </section>
        <section className={styles.SkillsIcons}>
            {/* BackEnd */}
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/Spring.png" alt="Spring" />
                </div>
            </div>
            {/* DataBase */}
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
            {/* FrontEnd */}
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/FrontEnd.png" alt="react" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/JQuery.png" alt="jquery" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/Vue.png" alt="Vue" />
                </div>
            </div>
            {/* Deployment */}
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/AWS.png" alt="aws" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/Jenkins.png" alt="jenkins" />
                </div>
                <div className={styles.skill}>
                    <img src="./img/Docker.png" alt="docker" />
                </div>
            </div>
            {/* Mobile */}
            <div className={styles.skillset}>
                <div className={styles.skill}>
                    <img src="./img/Mobile.png" alt="android" />
                </div>
            </div>
        </section>
        <section className={styles.desc}>
            <div className={styles.it_item}>
                - Boot를 주력으로 API 설계 및 구현,<br></br>
                - Security 기반 권한 제어,<br></br>
                - JPA·QueryDSL·Mybatis을 활용한 <br></br> 
                데이터 접근 계층을 구성.
            </div>
            <div className={styles.it_item}>
                - 서비스 요구사항에 따른 스키마 설계<br></br>
                - 인덱스, 쿼리 튜닝을 통한 성능 개선 경험
            </div>
            <div className={styles.it_item}>
                - API 연동을 위한 화면 구현<br></br>
                - 백엔드 개발을 위한 최소한의 프론트 구성 경험
            </div>
            <div className={styles.it_item}>
                - AWS 기반 서비스 구성<br></br>
                - Jenkins 파이프라인 구성 및 배포 경험<br></br>
                - Docker 기반 서비스 배포 환경 구성
            </div>
            <div className={styles.it_item}>
                - 서버 사이드 협업 경험
            </div>
        </section>
        </div>
    </>
}