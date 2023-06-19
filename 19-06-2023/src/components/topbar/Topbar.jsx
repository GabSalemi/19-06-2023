import { CameraIcon, IGTVLogo, MainLogo, MessangerIcon } from "../../icons";
import "./index.css";


const Topbar = () => {


    return (
        <div className="topbar__container">
            <div className="camera--icon__div">
                <CameraIcon />
            </div>
            <div className="main--logo__div">
                <MainLogo />
            </div>
            <div className="other--icons__div">
                <IGTVLogo />
                <MessangerIcon />
            </div>
        </div>
    )
}

export default Topbar  