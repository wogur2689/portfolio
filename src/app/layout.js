"use client";

import { useState } from "react";
import styles from "./app.module.css";
import Career from "./career/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

const TABS = [
  { id: "home", label: "HOME", component: Home },
  { id: "skills", label: "SKILLS", component: Skills },
  { id: "projects", label: "Projects", component: Projects },
  { id: "career", label: "Career", component: Career },
];

export default function RootLayout() {
  const [activeTab, setActiveTab] = useState("home");

  const ActiveComponent =
    TABS.find((tab) => tab.id === activeTab)?.component ?? Home;

  return (
    <html lang="ko">
      <body className={styles.body}>
        <main className={styles.main}>
          <nav className={styles.tabContainer}>
            <ul className={styles.tabs}>
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    type="button"
                    className={`${styles.tab} ${
                      activeTab === tab.id ? styles.activeTab : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <section className={styles.tabContent}>
            <ActiveComponent />
          </section>
        </main>
      </body>
    </html>
  );
}