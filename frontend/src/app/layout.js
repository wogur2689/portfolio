import styles from './app.module.css';
import Career from "./career/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import {MetaHead, Header, Footer} from "./common/page";

export default function RootLayout() {
  return (
    <html lang="ko">
      <MetaHead></MetaHead>
      <body className={styles.body}>
        <main>
          <Header></Header>
          <Home></Home>
          <Skills></Skills>
          <Projects></Projects>
          <Career></Career>
          <Footer></Footer>
        </main>
      </body>
    </html>
  )
}