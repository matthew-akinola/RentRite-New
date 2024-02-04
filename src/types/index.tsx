export interface DynamicObject {
    [key: string]: any;
  }

export interface CardProps {
    image: string;
    type: string;
    location: string;
    name: string;
    price: string;
    view: string;
    extraClass?: string;
  }