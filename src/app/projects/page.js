"use client"
import styles from './projects.module.css';
import React, {useState} from 'react';

//project data 추후 백엔드로 변경
const srcArr = [
    './img/project/MusicWeb.png', 
    './img/project/Chatting.png',
    './img/project/Portfolio.png',
    './img/project/DMCSite.png',
    './img/project/DMCAPP.png'
];

const altArr = [
    '음악사이트',
    '채팅',
    'portfolio',
    'DMCSite',
    'DMCAPP'
];

const data = [ 
        {
            'id' : 1,
            'title' : 'Music Web',
            'outline' : '음악 스트리밍 웹 애플리케이션으로 React를 확실히 공부하면서 프로젝트도 해보고 싶어서 만들어본 사이트',
            'skill' : 'React, Figma',
            'period': '2022.01 ~ 2022.06 (6개월)',
            'cont1': '음악 재생 기능 구현',
            'cont2': '반응형 웹으로 개발함으로써 모바일에서도 재생 가능',
            'url': 'https://wogur2689.github.io/MusicWeb'
        },
        {
            'id' : 2,
            'title' : 'chatting',
            'outline' : '실시간 채팅 애플리케이션 개발',
            'skill' : 'Spring boot, ws-stomp, JQuery, sockjs, thymeleaf, websocket, redis',
            'period': '2023.09 ~ 2023.10 (2개월)',
            'cont1': 'WebSocket을 사용한 실시간 메시징 기능 구현',
            'cont2': 'Redis를 사용한 메시지 저장 및 관리',
            'url': 'https://github.com/wogur2689/chatting'
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
        },
        {
            'id' : 4,
            'title' : 'DMC Site',
            'outline' : 'DMC App을 만든 팀으로 우리 팀을 소개하기 위해 개발된 팀프로젝트 사이트',
            'skill' : 'Spring boot, mysql, React, Pigma, github pages',
            'period': '2022.10 ~ 2022.12 (3개월)',
            'cont1': '단순하면서도 반응형이 쉽도록 디자인',
            'cont2': '메일 문의 기능을 구현하여 사용자의 지원을 받도록 노력.',
            'url': 'https://kangminna.github.io/MonthlyCoding_Web/' 
        },
        {
            'id' : 5,
            'title' : 'DMC App',
            'outline' : '동양미래대학교를 졸업한 선배로서 학교생활에 대한 정보를 제공하는 팀프로젝트 어플',
            'skill' : 'Spring boot, firebase, React, Pigma, android, kotlin',
            'period': '2023.01 ~ 2023.10 (9개월)',
            'cont1': '음식점과 놀거리에 대한 정보 수집 및 DB 저장 작업',
            'cont2': '학교생활에 대한 정보를 동적으로 제공하기 위한 백엔드 구축',
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
                        <h3>[기여]<br/>
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