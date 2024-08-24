import Career from "./career/page";
import Home from "./page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function RootLayout() {
  return (
    <html lang="ko">
      <body>
        <main>
          {/* <Home></Home> */}
          <Skills></Skills>
          <Projects></Projects>
          <Career></Career>
        </main>
      </body>
    </html>
  )
}