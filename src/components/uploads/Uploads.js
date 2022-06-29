import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";


const Uploads = () => {
    const [newUploads, setUploads] = useState({ image: "", title: "" })
    // const [loading, setLoading] = useState(false)



    //used to redirect to home page
    // let navigate = useNavigate();


    //function to get author name
    const setUploadsDetails = (e) => {
        setUploads(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    return (
        <form className='max-w-xl mx-auto mt-7'>
        <div className="py-2">
            <label htmlFor="authorname" className="text-xs text-gray-600 font-semibold">
                Upload-image:
            </label>
            <br />
            <input
                type="file"
                id="image"
                name="image"
                value={newUploads.image}
                className="rounded p-2 md:p-2 lg:p-2 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
                onChange={setUploadsDetails}
            />
        </div>
        <div className="py-2">
            <label htmlFor="title" className="text-xs text-gray-600 font-semibold">
                Title:
            </label>
            <br />
            <input
                type="text"
                id="title"
                name="title"
                value={newUploads.title}
                className="rounded p-2 md:p-2 lg:p-2 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
                onChange={setUploadsDetails}
            />
        </div>

        {/* <Link to="/"> */}
        {/* <button disabled={loading} className="bg-black text-white w-full font-semibold p-3 my-7 md:p-2 lg:p-2 rounded">
            {
                loading ? 'Submitting...' : 'Submit'
            }
        </button> */}
        {/* </Link> */}
    </form>
    )
}

export default Uploads;








    