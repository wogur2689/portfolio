"use client"
import styles from './projects.module.css';
import React, {useState} from 'react';

//project data 추후 백엔드로 변경
const srcArr = [
    './img/project/HappySum.png',
    './img/project/Hyundai.png',
    './img/project/Portfolio.png',
];

const altArr = [
    'HappySum',
    'Hyundai',
    'portfolio',
];

const data = [ 
        {
            'id' : 1,
            'title' : '행복더하기',
            'outline' : '지자체 복지플랫폼',
            'skill' : 'Spring boot, JPA, QueryDsl, Vue',
            'period': '2025.02 ~ 2025.12 (10개월)',
            'cont1': '관리자 페이지 고도화',
            'cont2': '',
        },
        {
            'id' : 2,
            'title' : '현대오일뱅크 AWS 클라우드 이관',
            'outline' : '노후된 시스템 마이그레이션 및 물리서버에서 클라우드 전환',
            'skill' : 'AWS, Linux, FTP, Jenkins, Docker, Nexus, Tomcat',
            'period': '2023.05 ~ 2024.10 (1년 5개월)',
            'cont1': 'Build 방식 변경 : Ant → Maven',
            'cont2': 'Jenkins CI/Cd 구축',
        },
        {
            'id' : 3,
            'title' : 'portfolio',
            'outline' : 'next.js14를 이용하여 나의 대표적인 성과를 소개하는 페이지.',
            'skill' : 'Next.js, Pigma',
            'period': '2024.07 ~ 2024.10 (3개월)',
            'cont1': 'Next.js를 이용한 트렌디한 사이트로 구현 ',
            'cont2': 'github 배포 및 확장성을 고려하면서 성과가 눈에 띄도록 개발',
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
                            {!projectData.url ? <h3>
                                <span className={styles.sectionTitle}>성과</span>
                                <br/>{projectData.period}
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
            <h1 className={styles.ht}>Projects</h1>
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