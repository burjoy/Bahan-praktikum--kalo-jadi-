import Loading from './loadingButton';
import postMatrixToDb from '../../apis/postDb'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SubmitButton({ matrix_jawaban, nomor_mahasiswa }) {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);

  const submitSpreadsheet = async () => {
    setIsLoading(true);
    try {
      const response = await postMatrixToDb(matrix_jawaban[0], matrix_jawaban[1], nomor_mahasiswa);
      console.log(response);
      if (response) {
        setIsLoading(false);
        sessionStorage.removeItem("access_token");

        // Navigate to /done
        navigate('/done');

        // Prevent user from going back
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', () => {
          navigate('/'); // Redirect to the homepage if the user tries to go back
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={submitSpreadsheet}
          disabled={loading}
        >
          Submit Jawaban
        </button>
        {loading && (
          <Loading />
        )}
      </div>
    </>
  )
}

SubmitButton.propTypes

export default SubmitButton;
