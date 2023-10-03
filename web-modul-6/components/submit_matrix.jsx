import handleMatrixSpreadsheet from '../../apis/postSpreadSheet';
import Loading from './loadingButton';
import { useState } from 'react';

function SubmitButton({matrix_jawaban}){
    const [loading, setIsLoading] = useState(false);
    const submitSpreadsheet = async() => {
        setIsLoading(true);
        try {
          const response = await handleMatrixSpreadsheet(matrix_jawaban[0], matrix_jawaban[1]);
          console.log(response);
          response.then(setIsLoading(false));
        } catch (error) {
          console.log(error);
        }
      }
    return(
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

SubmitButton.propTypes;

export default SubmitButton