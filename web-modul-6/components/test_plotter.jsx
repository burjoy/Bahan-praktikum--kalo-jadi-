import  { useState } from 'react';

const SystemPlot = ({ plotSystem }) => {
  const [imageSrc, setImageSrc] = useState('');

  const handlePlotSystem = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/plot_system');
      if (!response.ok) {
        throw new Error(`Error fetching image: ${response.status}`);
      }

      const blob = await response.blob();
      setImageSrc(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">System Plot</h2>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlotSystem}
        >
          Plot System
        </button>
      </div>
      {imageSrc && (
        <div className="flex justify-center items-center">
          <img src={imageSrc} alt="System Plot" className="max-w-full" />
        </div>
      )}
    </div>
  );
};

SystemPlot.propTypes

export default SystemPlot;
