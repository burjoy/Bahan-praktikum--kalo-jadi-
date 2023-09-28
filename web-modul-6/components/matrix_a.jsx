function Matrix(){
    const nilai = (e) => {
         console.log(e.target.value)
    }

    return(
        <>
        <div className="bg-gray-200 p-5">
        <div className="p-3">
            <form className="flex flex-row justify-center">
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
            </form>
        </div>

        <div className="p-3">
            <form className="flex flex-row justify-center">
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
            </form>
        </div>

        <div className="p-3">
            <form className="flex flex-row justify-center">
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={nilai}></input>
            </form>
        </div>
        <button className="border bg-black text-white p-4 rounded-md hover:bg-white transition-transform transform-gpu hover:scale-105 hover:text-black">Click Me</button>
        </div>
        </>
    )
}

export {Matrix}