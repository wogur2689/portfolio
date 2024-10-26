"use client"
import styles from './projects.module.css';
import React, {useState} from 'react';

//project data 추후 백엔드로 변경
const srcArr = [
    './img/project/MusicWeb.png', 
    './img/project/Chatting.png',
    './img/project/DMCSite.png',
    './img/project/DMCAPP.png'
];

const altArr = [
    '음악사이트',
    '채팅',
    'DMCSite',
    'DMCAPP'
];

const data = [ 
        {
            'id' : 1,
            'title' : 'Music Web',
            'outline' : '음악을 들을수 있는 사이트로 React를 확실히 공부하면서 프로젝트도 해보고 싶어서 만들어본 사이트',
            'skill' : 'React, Figma',
            'period': '2022.01 ~ 2022.06 (6개월)',
            'url': 'https://wogur2689.github.io/MusicWeb'
        },
        {
            'id' : 2,
            'title' : 'chatting',
            'outline' : 'redis 사용법과 소켓 통신을 경험하고 싶어 만든 채팅',
            'skill' : 'Spring boot, ws-stomp, JQuery, sockjs, thymeleaf, websocket, redis',
            'period': '2023.09 ~ 2023.10 (2개월)',
            'url': 'https://github.com'
        },
        {
            'id' : 3,
            'title' : 'DMC Site',
            'outline' : 'DMC App을 만든 팀으로 우리 팀을 소개하기 위해 개발된 팀프로젝트 사이트',
            'skill' : 'Spring boot, mysql, React, Pigma, github pages',
            'period': '2022.10 ~ 2022.12 (3개월)',
            'url': 'https://kangminna.github.io/MonthlyCoding_Web/'
        },
        {
            'id' : 4,
            'title' : 'DMC App',
            'outline' : '동양미래대학교를 졸업한 선배로서 학교생활에 대한 정보를 제공하는 팀프로젝트 어플',
            'skill' : 'Spring boot, firebase, React, Pigma, android, kotlin',
            'period': '2023.01 ~ 2023.10 (9개월)',
            'url': 'https://play.google.com/store/apps/details?id=com.monthlycoding.dmc2'
        }
    ];

//init
const initProjects = (open) => {
    const result = [];
    for (let index = 0; index < srcArr.length; index++) {
        result.push(
            <div key={index} className={styles.project}>
                <img src={srcArr[index]} alt={altArr[index]}/>
                <span><a onClick={(e) => {e.preventDefault(); open(index + 1)}}>{data[index].title}</a></span>
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
                <div id="myModal" className={styles.modal}>
                    <div className={styles.modalContent}>
                    <span className={styles.close} onClick={close}>&times;</span>
                    <h1>프로젝트: 
                        <a href={`${projectData.url}`}>
                            {projectData.title}
                        </a>
                    </h1>
                    <span>프로젝트 제목을 클릭 시 사이트로 이동합니다.</span>
                    <div>
                        <h3>[개요]<br/>{projectData.outline}</h3>
                        <h3>[기술]<br/>{projectData.skill}</h3>
                        <h3>[기간]<br/>{projectData.period}</h3>
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
                <div className={styles.project_list}>
                    {initProjects(openModal)}
                    {isModalOpen && (
                        <Alert id={selectedProjectId} open={isModalOpen} close={closeModal} />
                    )}
                </div>
            </section>
        </>
    );
}