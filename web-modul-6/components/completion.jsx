import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Completion() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to navigate to the homepage after 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(() => {
      navigate('/', { replace: true }); // Replace the current URL with '/'
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  // Prevent user from going back
  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      window.history.forward(); // Forward one step, effectively preventing going back
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <>
      <h2>
        Terima kasih sudah memasukkan nilai matriks Anda. Anda dapat menutup halaman ini kapan saja.
      </h2>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7' onClick={() => navigate('/')}>Kembali ke Halaman Utama</button>
    </>
  );
}

export default Completion;
