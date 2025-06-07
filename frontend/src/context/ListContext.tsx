import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PlacedShape } from '../data/ShapeTypes';

// interface PlacedShape {
//   id: number;
//   type: ShapeType;
//   x: number;
//   y: number;
// }

interface ListContextType {
  shapesList: PlacedShape[];
  setShapesList: React.Dispatch<React.SetStateAction<PlacedShape[]>>;
  exportPainting: () => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};

export const ListProvider = ({ children }: { children: ReactNode}) => {
  const [shapesList, setShapesList] = useState<PlacedShape[]>([]);

  const exportPainting = () => {
    const paintingData = {
      timestamp: new Date().toISOString(),
      shapes: shapesList
    };
    
    const jsonString = JSON.stringify(paintingData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `painting-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <ListContext.Provider value={{ shapesList, setShapesList, exportPainting }}>
      {children}
    </ListContext.Provider>
  );
};