import React, { useRef } from "react";
import { useList } from "../context/ListContext";
import { useCount } from "../context/CountContext";
import { PlacedShape } from "../data/ShapeTypes";
import styles from "./TitleBox.module.css";

const TitleBox = () => {
    const { exportPainting, setShapesList } = useList();
    const { resetCounts, increment } = useCount();
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleImportClick = () => {
      fileInputRef.current?.click();
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          if (!Array.isArray(json.shapes)) throw new Error("Invalid format");
  
          const shapes: PlacedShape[] = json.shapes;
          setShapesList(shapes);
  
          // Recalculate counts
          resetCounts(); // clear previous counts
          shapes.forEach(shape => increment(shape.type));
        } catch (err) {
          alert("Failed to import: Invalid file format.");
        }
      };
      reader.readAsText(file);
    };
  return (
    <div className={styles.titleBox}>
      <h2 className={styles.title}>Painting Title</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.topButton} onClick={handleImportClick}>Import</button>
        <button className={styles.topButton} onClick={exportPainting}>Export</button>
        <input
          type="file"
          accept="application/json"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default TitleBox;
