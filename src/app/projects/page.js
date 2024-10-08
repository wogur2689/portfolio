import styles from './projects.module.css';

//project data
const data = () => {
    return [ 
        {'id' : 1, 'title' : 'Music Web', 'outline' : '음악을 들을수 있는 사이트로 React를 확실히 공부하면서 프로젝트도 해보고 싶어서 만들어본 사이트'},
        {'id' : 2, 'title' : 'plant app', 'outline' : '식물을 촬영해서 어떤 식물인지 알아내는 어플'},
        {'id' : 3, 'title' : 'chatting', 'outline' : 'redis 사용법과 소켓 통신을 경험하고 싶어 만든 채팅'},
        {'id' : 4, 'title' : 'DMC App', 'outline' : '동양미래대학교를 졸업한 선배로서 학교생활에 대한 정보를 제공하는 팀프로젝트 어플'},
        {'id' : 5, 'title' : 'DMC Site', 'outline' : 'DMC App을 만든 팀으로 우리 팀을 소개하기 위해 개발된 팀프로젝트 사이트'},
        {'id' : 6, 'title' : 'dadok dadok', 'outline' : '독서 완독을 장려하는 팀프로젝트 사이트'},
    ]
}

function modalpopup() {
    return <>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                    <h1>프로젝트 : <a href="https://wogur2689.github.io/MusicWeb/">Music Web</a></h1>
                    <span>프로젝트 제목을 클릭시 사이트로 이동합니다.</span>
                    <p>
                        <h3>[개요]<br/>음악을 들을수 있는 사이트로 React를 확실히 공부하면서 프로젝트도 해보고 싶어서 만들어본 사이트</h3>
                        <h3>[기술]<br/>React, Pigma</h3>
                        <h3>[기간]<br/>2022.01 ~ 2022.06 6개월</h3>
                    </p>
                <br />
            </div>
        </div>
    </>
}

export default function Projects() {
    return (
        <>
            <h1 className={styles.ht}>Projects</h1>
            <section className={styles.projects}>
                <div className={styles.project_list}>
                    <div className={styles.project}>
                        <img src="./img/project/MusicWeb.png" alt="음악사이트"/>
                        <span><a href="">Music Web</a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/Plant.png" alt="식물사전앱"/>
                        <span><a href="">Plant App</a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/Chatting.png" alt="채팅"/>
                        <span><a href="">Mini Chatting</a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/DMCSite.png" alt="DMCSite"/>
                        <span><a href="">DMC Site</a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/DMCAPP.png" alt="DMCAPP"/>
                        <span><a href="">DMC APP</a></span>
                    </div>
                    <div className={styles.project}>
                        <img src="./img/project/dadok.png" alt="DadokDadok"/>
                        <span><a href="">Dadok Dadok</a></span>
                    </div>
                </div>
            </section>
        </>
    );
}