import { useContext } from 'react'
import { GridContext } from './GridProvider'

export default function Cell({ rowIndex, colIndex }) {
  const { cells, toggleCell } = useContext(GridContext);
  const isOn = cells[rowIndex][colIndex];

  return (
    <div
      style={{ 
        width: '100px', 
        height: '100px', 
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
        cursor: 'pointer',
        margin: '0',
        padding: '0',
      }}
      onClick={() => toggleCell(rowIndex, colIndex)}
    />
  );
}