const handlePlotSystem = async () => {
    try {
      const response = await fetch('https://burjoy.pythonanywhere.com/api/plot_system');
      if (!response.ok) {
        throw new Error(`Error fetching image: ${response.status}`);
      }

      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
};

export default handlePlotSystem