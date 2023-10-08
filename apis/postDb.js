const postMatrixToDb = async (matrixA, matrixB, npm) => {
    try {
      // Convert the matrixA and matrixB arrays to the format expected by the Flask server
      const formattedMatrixA = matrixA.map(row => row.map(Number));
      const formattedMatrixB = matrixB.map(row => row.map(Number));

      // Send a POST request to the spreadsheet to set the matrices
      const response = await fetch('https://modul-6-api.vercel.app/api/post_matrix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matrixA: formattedMatrixA,
          matrixB: formattedMatrixB,
          nomor_mahasiswa: npm,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error setting matrices: ${response.status}`);
      }

    //   setMatrices({matrix_A: formattedMatrixA, matrix_B:formattedMatrixB});

      alert('Matriks berhasil disubmit!');
      console.log([formattedMatrixA, formattedMatrixB, npm]);
      console.log(response);
      return "Success";
    } catch (error) {
      console.error('Error setting matrices:', error);
    }
  };

export default postMatrixToDb