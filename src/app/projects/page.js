"use client"
import styles from './projects.module.css';
import React, {useState} from 'react';

//project data 추후 백엔드로 변경
const srcArr = [
    './img/project/Portfolio.png',
];

const altArr = [
    'portfolio',
];

const data = [ 
        {
            'id' : 1,
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
                            <a href={projectData.url} target="_blank" rel="noopener noreferrer">
                                {projectData.title}
                            </a>
                        </h1>
                        <span>프로젝트 제목을 클릭 시 사이트로 이동합니다.</span>
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
                                <span className={styles.sectionTitle}>기간</span>
                                <br/>{projectData.period}
                            </h3>
                            <h3>
                                <span className={styles.sectionTitle}>기여</span>
                                <ul>
                                    <li>{projectData.cont1}</li>
                                    <li>{projectData.cont2}</li>
                                </ul>
                            </h3>
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