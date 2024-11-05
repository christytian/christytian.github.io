import { useContext } from 'react'
import { GridContext } from './GridProvider'
import Cell from './Cell'

// Grid component that displays the counter and 2x2 grid of cells
export default function Grid() {
    // Get cells array and active count from context
    const { cells, activeCount } = useContext(GridContext);

    return (
        <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start',
        gap: '10px',
        padding: '20px',
        fontFamily: 'Times New Roman, serif'
        }}>
        {/* Counter display showing number of active (black) cells */}
        <div style={{ 
            fontSize: '24px',
            marginBottom: '5px',
        }}>
            Count: {activeCount}
        </div>
        
        {/* 2x2 Grid container */}
        <div style={{ 
            display: 'grid',
            gridTemplateRows: 'repeat(2, 100px)',
            gridTemplateColumns: 'repeat(2, 100px)',
            gap: '0',
            border: '1px solid grey',
        }}>
            {/* Map through the 2D array to create grid cells */}
            {cells.map((row, rowIndex) => (
            row.map((_, colIndex) => (
                <Cell
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                />
            ))
            ))}
        </div>
        </div>
    );
}