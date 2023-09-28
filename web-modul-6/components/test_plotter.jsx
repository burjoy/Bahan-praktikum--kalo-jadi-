import  { useState } from 'react';
import handlePlotSystem from '../apis/getImage'

const SystemPlot = () => {
  const [imageSrc, setImageSrc] = useState('');

  const handlePlotClick = async () => {
    try {
      const hasil = await handlePlotSystem();
      setImageSrc(hasil);
    } catch (error) {
      console.log('Error getting image');  
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">System Plot</h2>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlotClick}
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
