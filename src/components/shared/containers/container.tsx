import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-[1rem] md:px-[3rem]">
      {children}
    </div>
  );
};

interface GridContainerProps {
  children: ReactNode;
}

export const GridContainer1: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-[2rem]">
      {children}
    </div>
  );
};
export const GridContainer3: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
      {children}
    </div>
  );
};

export const GridContainer4: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};
export const GridContainer5: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      {children}
    </div>
  );
};

// export const SlideSContainer 
