import styles from './projects.module.css';

//project data 추후 백엔드로 변경
const data = () => {
    return [ 
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
            'title' : 'plant app',
            'outline' : '식물을 촬영해서 어떤 식물인지 알아내는 어플',
            'skill' : 'Android, kotlin, Figma',
            'period': '2022.08 ~ 2022.10 (3개월)',
            'url': 'https://github.com'
        },
        {
            'id' : 3,
            'title' : 'chatting',
            'outline' : 'redis 사용법과 소켓 통신을 경험하고 싶어 만든 채팅',
            'skill' : 'Spring boot, ws-stomp, JQuery, sockjs, thymeleaf, websocket, redis',
            'period': '2023.09 ~ 2023.10 (2개월)',
            'url': 'https://github.com'
        },
        {
            'id' : 4,
            'title' : 'DMC Site',
            'outline' : 'DMC App을 만든 팀으로 우리 팀을 소개하기 위해 개발된 팀프로젝트 사이트',
            'skill' : 'Spring boot, mysql, React, Pigma, github pages',
            'period': '2022.10 ~ 2022.12 (3개월)',
            'url': 'https://github.com'
        },
        {
            'id' : 5,
            'title' : 'DMC App',
            'outline' : '동양미래대학교를 졸업한 선배로서 학교생활에 대한 정보를 제공하는 팀프로젝트 어플',
            'skill' : 'Spring boot, firebase, React, Pigma, android, kotlin',
            'period': '2023.01 ~ 2023.10 (9개월)',
            'url': 'https://github.com'
        },
        {
            'id' : 6,
            'title' : 'dadok dadok',
            'outline' : '독서 완독을 장려하는 팀프로젝트 사이트',
            'skill' : 'Spring boot, mysql, swagger, JUnit, Pigma',
            'period': '2024.02 ~ 2024.08 (7개월)',
            'url': 'https://github.com'
        },
    ]
}

export const ModalPopup = (props) => {
    const projectData = data().find(project => project.id === props.id);

    if (!projectData) {
        return null; // 해당 id에 맞는 프로젝트가 없을 경우 모달을 표시하지 않음
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal()}>&times;</span>
                <h1>프로젝트: 
                    <a href={`${projectData.url}`}>
                        {projectData.title}
                    </a>
                </h1>
                <span>프로젝트 제목을 클릭 시 사이트로 이동합니다.</span>
                <p>
                    <h3>[개요]<br/>{projectData.outline}</h3>
                    <h3>[기술]<br/>{projectData.skill}</h3>
                    <h3>[기간]<br/>{projectData.period}</h3>
                </p>
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <>
            <h1 className={styles.ht}>Projects</h1>
            <section className={styles.projects}>
                <div className={styles.project_list}>
                    <div className={styles.project}>
                        <img src="./img/project/MusicWeb.png" alt="음악사이트"/>
                        <span><a href="#"><button type="button" onclick="modalpopup(1)">Music Web</button></a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/Plant.png" alt="식물사전앱"/>
                        <span><a href="#"><button type="button" onclick="modalpopup(2)">Plant App</button></a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/Chatting.png" alt="채팅"/>
                        <span><a href="#"><button type="button" onclick="modalpopup(3)">Mini Chatting</button></a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/DMCSite.png" alt="DMCSite"/>
                        <span><a href="#"><button type="button" onclick="modalpopup(4)">DMC Site</button></a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/DMCAPP.png" alt="DMCAPP"/>
                        <span><a href="#"><button type="button" onclick="modalpopup(5)">DMC APP</button></a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/dadok.png" alt="DadokDadok"/>
                        <span><a href="#"><button type="button" onclick="modalpopup(6)">Dadok Dadok</button></a></span>
                    </div>
                </div>
            </section>
        </>
    );
}