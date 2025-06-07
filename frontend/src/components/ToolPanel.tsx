// import React, { useState } from "react";
import styles from "./ToolPanel.module.css";
import Shape from "./Shape";
// import { useShape, ShapeType } from "../context/ShapeContext";
import { useShape } from "../context/ShapeContext";
import { ShapeType } from '../data/ShapeTypes';

const ToolPanel = () => {
  // const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const { selectedShape, setSelectedShape } = useShape();

  const shapes = ["circle", "square", "triangle"] as const;

  // const handleDeselect = () => {
  //   setSelectedTool(null);
  // };

  // React.useEffect(() => {
  //   const handleClickOutside = () => setSelectedTool(null);
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  const handlePanelClick = () => {
    setSelectedShape(null); // Deselect on any click inside the panel
  };

  const handleShapeClick = (shape: ShapeType) => {
    if (selectedShape === shape) {
      setSelectedShape(null);
    } else {
      setSelectedShape(shape);
    }
  };
  

  return (
    <div 
      className={styles.toolsPanel}
      // onClick={(e) => e.stopPropagation()} // prevent bubbling to document
      onClick={handlePanelClick}
      >
      <h3>Tools</h3>

      {/* <svg class={styles.triangleButton} width="120" height="104" viewBox="0 0 120 104">
        <polygon class={styles.triangleStroke} points="60,10 10,90 110,90" />
      </svg>

      <Shape
        panelType="tools"
        shapeType="triangle"
        isSelected={selectedTool === "triangle"}
        // onSelect={() => setSelectedTool("triangle")}
        onSelect={() => handleShapeClick("triangle")}
        /> */}

      {/* <input type="checkbox" id="triangle-toggle">
        <label for="triangle-toggle" aria-label="Toggle triangle selection">
          <svg width="120" height="104" viewBox="0 0 120 104">
              <polygon class="triangle" points="60,10 10,90 110,90" />
          </svg>
        </label>
      </input> */}

      {shapes.map(shape => (
        <Shape
          key={shape}
          panelType="tools"
          shapeType={shape}
          isSelected={selectedShape === shape}
          onSelect={() => handleShapeClick(shape)}
        />
      ))}
    </div>
  );
};

export default ToolPanel;