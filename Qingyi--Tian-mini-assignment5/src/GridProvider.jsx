import { createContext, useState } from 'react';

// Create context to be used across components
export const GridContext = createContext();

// Provider component that wraps the app and provides grid state
export const GridProvider = ({ children }) => {
    // Initialize 2x2 grid state with all cells off (false)
    const [cells, setCells] = useState([
        [false, false],
        [false, false]
    ]);

     // Calculate total number of active (black) cells
    const activeCount = cells.flat().filter(cell => cell).length;

    // Toggle cell state function
    const toggleCell = (rowIndex, colIndex) => {
        setCells(prevCells => {
        // Create a deep copy of the cells array
        const newCells = prevCells.map(row => [...row]);
        // Toggle the selected cell's state
        newCells[rowIndex][colIndex] = !newCells[rowIndex][colIndex];
        return newCells;
        });
    };

    // Create value object to be passed through context
    const contextValue = {
        cells,
        activeCount,
        toggleCell
    };

    return (
        <GridContext.Provider value={contextValue}>
        {children}
        </GridContext.Provider>
    );
};