// import React, { createContext, useState, ReactNode, useContext } from 'react';

// interface SelectedNumberContextType {
//   selectedNumber: number | null;
//   setSelectedNumber: React.Dispatch<React.SetStateAction<number | null>>;
//   renderedNumber: number | null;
//   setRenderedNumber: React.Dispatch<React.SetStateAction<number | null>>;
// }

// const SelectedNumberContext = createContext<SelectedNumberContextType | undefined>(undefined);

// const useSelectedNumber = () => {
//   const context = useContext(SelectedNumberContext);
//   if (!context) {
//     throw new Error("useSelectedNumber must be used within a SelectedNumberProvider");
//   }
//   return context;
// };

// const SelectedNumberProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
//   const [renderedNumber, setRenderedNumber] = useState<number | null>(null);

//   return (
//     <SelectedNumberContext.Provider value={{ selectedNumber, setSelectedNumber, renderedNumber, setRenderedNumber }}>
//       {children}
//     </SelectedNumberContext.Provider>
//   );
// };

// export { SelectedNumberProvider, useSelectedNumber };

// import { createContext, useState } from 'react';

// const SelectedNumberContext = createContext(null);

// const SelectedNumberProvider = ({ children }) => {
//   const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

//   return (
//     <SelectedNumberContext.Provider value={{ selectedNumber, setSelectedNumber }}>
//       {children}
//     </SelectedNumberContext.Provider>
//   );
// };

// export { SelectedNumberContext, SelectedNumberProvider };
