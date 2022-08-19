import { FormCont, InnerForm, InnerContent } from "./uploadStyles";
import { useNavigate } from "react-router-dom";
import { URL } from "../photolist/PhotoLists";
import { ImUpload3 } from "react-icons/im";
import { useState } from "react";
import Axios from "axios";

const Uploads = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false);

  //used to redirect to home page
  let navigate = useNavigate();

  //function to get author name
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileUpload = e => {
    const files = e.target.files
    if(files.length) {
      setImage(files[0])
    }
  }

  //function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData()
      data.append('title', title)
      data.append('image', image)
      const result = await Axios.post(URL, data);
      navigate("/", { replace: true });
    } catch {
      setLoading(false);
    }
    setTitle('');
  };

  return (
    <FormCont onSubmit={handleSubmit}>
      <InnerForm>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </InnerForm>
      <InnerContent>
        <label htmlFor="authorname">
          <ImUpload3 style={{ fontSize: 50, color: "gray" }} />
        </label>
        <br />
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileUpload}
        />
      </InnerContent>

      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </FormCont>
  );
};

export default Uploads;
