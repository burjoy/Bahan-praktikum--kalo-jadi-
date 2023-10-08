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
        const response = await fetch(`https://modul-6-api.vercel.app/login`, options);
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