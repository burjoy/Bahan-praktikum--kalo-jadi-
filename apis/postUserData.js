const postUserData =  async (npm) => {
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                nomor_mahasiswa: npm,
            }),
            headers: {
                'Content-Type': 'application/json', // Set the Content-Type header
            },
        }
        const response = await fetch(`http://127.0.0.1:3000/login`, options);
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error login: ${response.status}`);
        }
        console.log(npm);
        return response  
    } catch (error) {
        console.log(error);
    }
}

export default postUserData