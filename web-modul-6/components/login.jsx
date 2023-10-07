import { useState } from 'react';
import postUserData from '../../apis/postUserData';
import { useNavigate } from 'react-router-dom';
import '../src/App.css'

const Login = ({ambilToken}) => {
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
    try {
        const hasil = await postUserData(formData.studentId);
        const result = await hasil.json();
        if(result){
            console.log(result);
            sessionStorage.setItem("access_token", result);
            console.log("Berhasil Login");
            alert("Berhasil Masuk");
            navigate('/matrix-calculator');
            ambilToken(result);
        }
        else{
            console.log(result);
            console.log("Gagal login");
            alert("Gagal Masuk");
        }
    } catch (error) {
        console.log(error);
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
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

Login.propTypes

export default Login;
