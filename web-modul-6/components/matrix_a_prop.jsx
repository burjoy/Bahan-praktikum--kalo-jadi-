import { useState } from 'react';


const MatrixInput = ({ setMatrices }) => {
  const [matrixA, setMatrixA] = useState(Array(3).fill(Array(3).fill('')));
  const [matrixB, setMatrixB] = useState(Array(3).fill(Array(1).fill('')));

  const handleMatrixSubmit = async () => {
    try {
      // Convert the matrixA and matrixB arrays to the format expected by the Flask server
      const formattedMatrixA = matrixA.map(row => row.map(Number));
      const formattedMatrixB = matrixB.map(row => row.map(Number));

      // Send a POST request to the Flask server to set the matrices
      const response = await fetch('http://127.0.0.1:5000/api/set_matrices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matrix_A: formattedMatrixA,
          matrix_B: formattedMatrixB,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error setting matrices: ${response.status}`);
      }

      setMatrices({matrix_A: formattedMatrixA, matrix_B:formattedMatrixB});

      alert('Matrices set successfully!');
    } catch (error) {
      console.error('Error setting matrices:', error);
    }
  };

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
        onClick={handleMatrixSubmit}
      >
        Set Matrices
      </button>
    </div>
  );
};

MatrixInput.propTypes

export default MatrixInput;
