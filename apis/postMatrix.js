const handleMatrixSubmit = async (matrixA, matrixB) => {
    try {
      // Convert the matrixA and matrixB arrays to the format expected by the Flask server
      const formattedMatrixA = matrixA.map(row => row.map(Number));
      const formattedMatrixB = matrixB.map(row => row.map(Number));

      // Send a POST request to the Flask server to set the matrices
      const response = await fetch('https://burjoy.pythonanywhere.com/api/set_matrices', {
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

    //   setMatrices({matrix_A: formattedMatrixA, matrix_B:formattedMatrixB});

      alert('Matrices set successfully!');
    } catch (error) {
      console.error('Error setting matrices:', error);
    }
  };

export default handleMatrixSubmit