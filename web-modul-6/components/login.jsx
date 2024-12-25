import { useState } from 'react';
import postUserData from '../../apis/postUserData';
import { useNavigate } from 'react-router-dom';
import '../src/App.css'
import Loading from './loadingButton';

const Login = ({ambilToken, ambilStatus}) => {
  const [loading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(typeof e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform authentication logic here using the formData.
    console.log('Submitted Data:', formData);
  };

  const navigate = useNavigate();

  const loginNpm = async () => {
    setIsLoading(true);
    try {
        const hasil = await postUserData(formData.studentId);
        const result = await hasil.json();
        if(result[0]){
            sessionStorage.setItem("access_token", result[0]);
            console.log("Berhasil Login");
            alert("Berhasil Masuk");
            ambilToken(result[0]);
            ambilStatus(result[1]?.submit_pre_test);
            console.log(sessionStorage.getItem("access_token"));
            // if(result[0] == "12345"){

            // }
            console.log(`Test Result: ${result[1]}`);
            if(result[1]?.submit_pre_test){
              navigate('/done');
            }
            else{
              navigate('/matrix-calculator');
            }
        }
        else{
            console.log(result);
            console.log("Gagal login");
            alert("Gagal Masuk");
        }
        setIsLoading(false);
    } catch (error) {
        console.log(error);
        // if(error == "ERR_INTERNET_DISCONNECTED"){
        //   console.log("Internet disconnected");
        // }
        console.log(typeof error);
    }
    if(navigator.onLine){
      console.log("onlen");
    }
  }

  return (
    <div className='App'>
    <div className=" min-h-[90vh] flex items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-white text-center">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-center"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="studentId" className="block mb-2 text-white text-center">NPM:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 text-center"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={loginNpm}

            >
              Login
            </button>
            {loading && (<Loading />)}
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

Login.propTypes

export default Login;
