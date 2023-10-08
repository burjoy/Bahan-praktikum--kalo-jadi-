import { useState } from 'react';
import MatrixInput from './matrix_a_prop';
import SystemPlot from './test_plotter';
import SubmitButton from './submit_matrix';
import '../src/App.css'

function TestApp({npm}) {
  const [matrices, setMatrices] = useState(null);
  const [images, setImages] = useState(null);

  return (
    <>
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Matrix Plotter</h1>
      <div className="mb-8">
        <MatrixInput setMatrices={setMatrices} />
      </div>
      {matrices && (
        <div className="mb-8">
          <SystemPlot setImages={setImages}/>
        </div>
      )}
      {images && (
        <div className="mb-8">
          <SubmitButton matrix_jawaban={matrices} nomor_mahasiswa={npm}/>
        </div>
      )}
    </div>
    </>
  );
}

TestApp.propTypes

export default TestApp;
