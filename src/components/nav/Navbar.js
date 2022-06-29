import { Navcontainer, Navitems } from "./navStyles";
import { FaHome } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { BiCloudUpload } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navcontainer>
      <Navitems>
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/">
          <MdAddPhotoAlternate />
        </Link>
        <Link to="/upload-image/">
          <BiCloudUpload />
        </Link>
      </Navitems>
    </Navcontainer>
  );
};

export default Navbar;
