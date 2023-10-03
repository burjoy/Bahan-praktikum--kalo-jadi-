const handleMatrixSpreadsheet = async (matrixA, matrixB) => {
    try {
      // Convert the matrixA and matrixB arrays to the format expected by the Flask server
      const formattedMatrixA = matrixA.map(row => row.map(Number));
      const formattedMatrixB = matrixB.map(row => row.map(Number));

      // Send a POST request to the spreadsheet to set the matrices
      const response = await fetch('http://127.0.0.1:3000/api/set_matrices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matrixA: formattedMatrixA,
          matrixB: formattedMatrixB,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error setting matrices: ${response.status}`);
      }

    //   setMatrices({matrix_A: formattedMatrixA, matrix_B:formattedMatrixB});

      alert('Matrices set successfully!');
      console.log([formattedMatrixA, formattedMatrixB]);
      return "Success";
    } catch (error) {
      console.error('Error setting matrices:', error);
    }
  };

export default handleMatrixSpreadsheet