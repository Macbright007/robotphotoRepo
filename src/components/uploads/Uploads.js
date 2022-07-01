import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
import { ImUpload3 } from "react-icons/im"
import { FormCont, InnerForm, InnerContent } from "./uploadStyles";

const Uploads = () => {
  const [newUploads, setUploads] = useState({ image: "", title: "" });
  const [loading, setLoading] = useState(false);

  //used to redirect to home page
  // let navigate = useNavigate();

  //function to get author name
  const setUploadsDetails = (e) => {
    setUploads((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <FormCont>
      <InnerForm>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={newUploads.title}
          onChange={setUploadsDetails}
        />
      </InnerForm>
      <InnerContent>
      
        <label htmlFor="authorname">
        <ImUpload3 style={{fontSize: 50, color: "gray"}}/>
        </label>
        <br />
        <input
          type="file"
          id="image"
          name="image"
          value={newUploads.image}
          onChange={setUploadsDetails}
        />
      </InnerContent>

     
      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
     
    </FormCont>
  );
};

export default Uploads;
