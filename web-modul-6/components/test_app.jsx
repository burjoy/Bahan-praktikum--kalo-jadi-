import { useState } from 'react';
import MatrixInput from './matrix_a_prop';
import SystemPlot from './test_plotter';

function TestApp() {
  const [matrices, setMatrices] = useState(null);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Matrix Plotter</h1>
      <div className="mb-8">
        <MatrixInput setMatrices={setMatrices} />
      </div>
      {matrices && (
        <div className="mb-8">
          <SystemPlot />
        </div>
      )}
    </div>
  );
}

export default TestApp;
