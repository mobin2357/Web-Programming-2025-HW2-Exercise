// import { useState } from "react";
import styles from "./FormBuilder.module.css";
import ToolPanel from "../components/ToolPanel";
import { ShapeProvider } from "../context/ShapeContext";
import Canvas from "../components/Canvas";
import { CountProvider } from "../context/CountContext";
import CountBar from "../components/CountBar";
// import { ListProvider, useList } from "../context/ListContext";
import { ListProvider } from "../context/ListContext";
import TitleBox from "../components/TitleBox";

export default function FormBuilder() {
  return (
    <div className={styles.formBuilderPage} dir="rtl">
      <header>
        <h1>Painter App</h1>
      </header>
      {/* <button className={styles.returnButton} onClick={back}>
        بازگشت
      </button> */}

      <main>
        <ListProvider>
          {/* <div className={styles.titleBox}>
            <h2 className={styles.title}>Painting Title</h2>
            <div className={styles.buttonGroup}>
              <button className={styles.topButton}>Import</button>
              <button className={styles.topButton} onClick={exportPainting}>Export</button>
            </div>
          </div> */}
          <CountProvider>
            <TitleBox/>
            <div className={styles.group1}>
              <ShapeProvider>
                <div className={styles.group2}>
                  <Canvas/>
                  <CountBar/>
                </div>
                <ToolPanel/>
              </ShapeProvider>
            </div>
          </CountProvider>
        </ListProvider>
      </main>
    </div>
  );
}
