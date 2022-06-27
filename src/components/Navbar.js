import { Navcontainer, Navitems } from "./styles"
import { FaHome } from "react-icons/fa"
import { MdAddPhotoAlternate } from "react-icons/md"
import { BiCloudUpload } from "react-icons/bi"

const Navbar = () => {
    return (
        <Navcontainer>
            <Navitems>
                <a>
                    <FaHome />
                </a>
                <a>
                    <MdAddPhotoAlternate />
                </a>
                <a>
                    <BiCloudUpload />
                </a>
            </Navitems>
        </Navcontainer>
    )
}

export default Navbar