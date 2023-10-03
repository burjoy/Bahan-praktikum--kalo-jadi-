import { useState } from 'react';
import handleMatrixSubmit from '../../apis/postMatrix';
// import handleMatrixSpreadsheet from '../../apis/postSpreadSheet';

const MatrixInput = ({ setMatrices }) => {
  const [matrixA, setMatrixA] = useState(Array(3).fill(Array(3).fill('')));
  const [matrixB, setMatrixB] = useState(Array(3).fill(Array(1).fill('')));

  const submitMatrix = async () => {
    try {
      const hasil = await handleMatrixSubmit(matrixA, matrixB);
      setMatrices([hasil[0], hasil[1]]);
    } catch (error) {
      console.log(`There's an error: ${error}`);
    }
  }

  // const submitSpreadsheet = async() => {
  //   try {
  //     const response = await handleMatrixSpreadsheet(matrixA, matrixB);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleMatrixAChange = (value, row, col) => {
    const updatedMatrixA = matrixA.map((matrixRow, rowIndex) =>
      rowIndex === row ? matrixRow.map((val, colIndex) => (colIndex === col ? value : val)) : matrixRow
    );
    setMatrixA(updatedMatrixA);
  };

  const handleMatrixBChange = (value, row) => {
    const updatedMatrixB = matrixB.map((matrixRow, rowIndex) =>
      rowIndex === row ? matrixRow.map(() => value) : matrixRow
    );
    setMatrixB(updatedMatrixB);
  };

  return (
    <div className=''>
      <h2 className="text-xl font-bold mb-4">Enter Matrix A and B Values:</h2>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="border border-gray-400 rounded-lg p-2">
          {matrixA.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              {row.map((value, colIndex) => (
                <input
                  key={colIndex}
                  type="text"
                  className="border rounded-lg text-center focus:border-red-600 w-12 h-12"
                  placeholder="0"
                  value={value}
                  onChange={e => handleMatrixAChange(e.target.value, rowIndex, colIndex)}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="border border-gray-400 rounded-lg p-2">
          {matrixB.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              {row.map((value, colIndex) => (
                <input
                  key={colIndex}
                  type="text"
                  className="border rounded-lg text-center focus:border-red-600 w-12 h-12"
                  placeholder="0"
                  value={value}
                  onChange={e => handleMatrixBChange(e.target.value, rowIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          submitMatrix();}}
      >
        Set Matrices
      </button>
    </div>
  );
};

MatrixInput.propTypes

export default MatrixInput;
