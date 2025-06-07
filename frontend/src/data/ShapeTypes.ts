export type ShapeType = 'circle' | 'square' | 'triangle' | null;
// export type ShapeType = 'circle' | 'square' | 'triangle';

export interface PlacedShape {
    id: number;
    type: ShapeType;
    x: number;
    y: number;
  }