import Head from "next/head";

const MetaHead = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            {/* meta */}
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <meta
                name="hyeok's portfolio"
                content="개발자 길재혁의 포트폴리오입니다."
            />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content={url || "https://nuguna-nuri.vercel.app"} /> */}
            {/* <meta property="og:image" content={image} /> */}
            <meta property="og:article:author" content="wogur2689" />

            {/* font */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            
            {/* css */}
            <link rel="stylesheet" href="./css/index.css"/>

            {/* js */}
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="./js/index.js"></script>
        </Head>
    );
}

const Header = () => {
    return (
        <header>
            <nav id="menu">
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">Project</a>
                <a href="#">Career</a>
            </nav>
        </header>
    );
}

const Footer = () => {
    return (
        <footer>
        </footer>
    );
}

export {
    MetaHead,
    Header,
    Footer
}