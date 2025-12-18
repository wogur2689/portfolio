import styles from './career.module.css';

const timelineData = [
    {
        id: 1,
        type: 'education',
        title: '동양미래대학교',
        period: '2018.02 ~ 2022.02',
        description: '컴퓨터정보공학 졸업',
        conf1: '자료구조, 데이터베이스, JAVA 등 전공 이수',
        conf2: 'Java 기반 웹-서버 개발 기초 역량 학습',
        icon: './img/School2.png'
    },
    {
        id: 2,
        type: 'club',
        title: 'MonthlyCoding',
        period: '2021.09 ~ 2023.10',
        description: '코딩 동아리 웹스터디',
        conf1: '웹/백엔드 중심 기술 스터디 진행',
        conf2: '팀 단위 미니 프로젝트 경험',
        icon: './img/project/DMCSite.png'
    },
    {
        id: 3,
        type: 'company',
        title: 'SI',
        period: '2021.12 ~ 2025.02',
        description: '개발본부 웹개발자 대리',
        conf1: 'Spring Boot 기반 웹 API 개발',
        conf2: '클라우드 전환 및 시스템 마이그레이션',
        icon: './img/company1.png'
    },
    {
        id: 4,
        type: 'education',
        title: '학점은행제(편입)',
        period: '2023.08 ~ 2024.08',
        description: '컴퓨터공학 학사졸업',
        conf1: '실무 병행하며 학사 학위 취득',
        conf2: '전공 이론 보완 및 컴퓨터공학 전반 학습',
        icon: './img/School1.png'
    },
    {
        id: 5,
        type: 'certificate',
        title: '정보처리기사',
        period: '2024.12',
        description: '한국산업인력공단',
        icon: './img/Qnet.png'
    },
    {
        id: 6,
        type: 'company',
        title: 'SI',
        period: '2025.02 ~ 2025.12',
        description: '서비스 컨텐츠 사업부 웹개발자 대리',
        conf1: '운영중인 서비스 Back-Office 고도화 담당',
        conf2: '성능 튜닝, 보안 인증 대응, CS 대응',
        icon: './img/Qnet.png'
    }
];

export default function Career() {
    return (
        <>
            <h1 className={styles.ht}>Career</h1>
            <section className={styles.career}>
                <div className={styles.timeline}>
                    {timelineData.map((item, index) => (
                        <div key={item.id} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot}></div>
                                {index !== timelineData.length - 1 && (
                                    <div className={styles.timelineLine}></div>
                                )}
                            </div>
                            <div className={styles.timelineCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIcon}>
                                        {item.type === 'company' ? (
                                            <div className={styles.iconWrapper}>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    <path d="M5 21V7L13 2V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M19 21V11H13V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    <path d="M9 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    <path d="M9 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                        ) : item.type === 'education' || item.type === 'club' ? (
                                            <div className={styles.iconWrapper}>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 19.5C4 18.12 5.12 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M6.5 2C5.12 2 4 3.12 4 4.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M20 4.5C20 3.12 18.88 2 17.5 2H6.5C5.12 2 4 3.12 4 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M20 4.5V19.5C20 20.88 18.88 22 17.5 22H6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        ) : item.type === 'certificate' ? (
                                            <div className={styles.iconWrapper}>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className={styles.cardTitleSection}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <span className={styles.cardPeriod}>{item.period}</span>
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardDescription}>{item.description}</p>
                                        {(item.conf1 || item.conf2) && (
                                            <ul className={styles.cardConfs}>
                                                {item.conf1 && <li className={styles.cardConfItem}>{item.conf1}</li>}
                                                {item.conf2 && <li className={styles.cardConfItem}>{item.conf2}</li>}
                                            </ul>
                                        )}
                                    </div>
                                    <span className={styles.cardType}>{item.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
