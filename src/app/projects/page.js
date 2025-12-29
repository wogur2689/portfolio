"use client"
import styles from './projects.module.css';
import React, {useState} from 'react';

//project data 추후 백엔드로 변경
const srcArr = [
    './img/project/Spring.png',
    './img/project/AWS.png',
    './img/project/Portfolio.png',
];

const altArr = [
    'Spring',
    'AWS',
    'portfolio',
];

const data = [ 
        {
            'id' : 1,
            'title' : '지자체 통합 복지 플랫폼 고도화',
            'outline' : '대규모 사용자 데이터 처리를 위한 시스템 고도화 및 국가 보안 인증(CSAP/ISMS) 기준에 부합하는 안정적 서비스 환경 구축.',
            'skill' : 'Spring boot, JPA, QueryDsl, Vue, Mysql',
            'period': '2025.02 ~ 2025.12 (10개월)',
            'cont1': 'JPA/QueryDSL 기반의 생산성 높은 개발을 지향하되, 대규모 데이터 집계 등 복잡도가 높은 로직은 Native Query를 활용하여 인덱스 최적화 및 실행 계획 직접 제어',
            'cont2': 'CSAP·ISMS 인증 기준에 따른 취약 로그 개선 및 비밀번호 변경주기 수정',
            'cont3': 'Mobile APP Push 대량 발송 API 개발(2초당 300건 이상의 메시지 안정적 송출)',
            'cont4': '고객사/사용자 이슈 대응 (CS)',
            'result': '쿼리 튜닝 전후 속도 차이(30초 -> 3초), CSAP/ISMS 보안 기술 규격 준수 및 인증 획득'
        },
        {
            'id' : 2,
            'title' : '대규모 온프레미스 시스템의 AWS 클라우드 네이티브 전환',
            'outline' : '물리 서버 기반의 레거시 환경을 클라우드로 이관하여 운영 효율성 및 확장성 확보.',
            'skill' : 'AWS, Linux, FTP, Jenkins, Docker, Nexus, Tomcat',
            'period': '2023.05 ~ 2024.10 (1년 5개월)',
            'cont1': 'Docker 컨테이너 기술을 도입하여 환경 의존성을 제거하고 서버 리소스 사용률 최적화.',
            'cont2': 'Jenkins 기반의 CI/CD를 구축하여 수동 배포 프로세스를 자동화하고 배포 주기 00% 단축.',
            'cont3': '망 분리 환경 내의 파일 전송 보안 요구사항을 준수하는 고가용성 전송 인프라 설계',
            'cont4': '빌드 및 배포 프로세스 개선을 통한 유지보수성 향상',
            'result': '클라우드 환경 전환으로 시스템의 확장성과 안정성을 대폭 향상 및 서버 비용 절감.'
        },
        {
            'id' : 3,
            'title' : 'portfolio',
            'outline' : 'Next.js를 활용하여 개인 경력 및 기술적 성과를 시각화한 브랜드 페이지 구축.',
            'skill' : 'Next.js, Figma',
            'period': '2024.07 ~ 2024.10 (3개월)',
            'cont1': 'Next.js를 기반의 사용자 경험(UX) 최적화 ',
            'cont2': 'GitHub Actions를 활용한 자동 배포 환경 구축 및 유지보수성 확보',
            'url': 'https://wogur2689.github.io/portfolio'
        }
    ];

//init
const initProjects = (open) => {
    const result = [];
    for (let index = 0; index < srcArr.length; index++) {
        const projectData = data[index];
        result.push(
            <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                    <img src={srcArr[index]} alt={altArr[index]}/>
                </div>
                <div className={styles.projectInfo}>
                    <h2 className={styles.projectTitle}>
                        <a href={projectData.url} target="_blank" rel="noopener noreferrer">
                            {projectData.title}
                        </a>
                    </h2>
                    <p className={styles.projectOutline}>{projectData.outline}</p>
                    <div className={styles.projectDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>기술:</span>
                            <span className={styles.detailValue}>{projectData.skill}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>기간:</span>
                            <span className={styles.detailValue}>{projectData.period}</span>
                        </div>
                    </div>
                    <button 
                        className={styles.moreButton}
                        onClick={(e) => {e.preventDefault(); open(index + 1)}}
                    >
                        더보기
                    </button>
                </div>
            </div>
        );
    }
    return (
        <>{result}</>
    );
}

//popup
const Alert = ({id, open, close}) => {
    const projectData = data.find(project => project.id == id);

    if (!projectData) {
        return null; // 해당 id에 맞는 프로젝트가 없을 경우 모달을 표시하지 않음
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <>
            {open ? (
                <div id="myModal" className={styles.modal} onClick={close}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.close} onClick={close}>&times;</button>
                        <h1>
                            {projectData.url ? (
                            <a href={projectData.url} target="_blank" rel="noopener noreferrer">
                                {projectData.title}
                            </a>
                            ) : projectData.title
                            }
                        </h1>
                        <span>기간 : {projectData.period}</span>
                        <div>
                            <h3>
                                <span className={styles.sectionTitle}>개요</span>
                                <br/>{projectData.outline}
                            </h3>
                            <h3>
                                <span className={styles.sectionTitle}>기술</span>
                                <br/>{projectData.skill}
                            </h3>
                            <h3>
                                <span className={styles.sectionTitle}>기여</span>
                                <ul>
                                    {projectData.cont1 ? ( <li> {projectData.cont1}  </li>) : ''}
                                    {projectData.cont2 ? ( <li> {projectData.cont2}  </li>) : ''}
                                    {projectData.cont3 ? ( <li> {projectData.cont3}  </li>) : ''}
                                    {projectData.cont4 ? ( <li> {projectData.cont4}  </li>) : ''}
                                    {projectData.cont5 ? ( <li> {projectData.cont5}  </li>) : ''}
                                </ul>
                            </h3>
                            {projectData.result ? <h3>
                                <span className={styles.sectionTitle}>성과</span>
                                <br/>{projectData.result}
                            </h3> : ''}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const openModal = (id) => {
        setSelectedProjectId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <h1 className={styles.ht}>Key Projects</h1>
            <section className={styles.projects}>
                <div className={styles.projectList}>
                    {initProjects(openModal)}
                    {isModalOpen && (
                        <Alert id={selectedProjectId} open={isModalOpen} close={closeModal} />
                    )}
                </div>
            </section>
        </>
    );
}