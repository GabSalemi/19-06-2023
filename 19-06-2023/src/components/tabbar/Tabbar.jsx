import { AddIcon, CameraIcon, HomeIcon, LikeIcon, SearchIcon } from "../../icons";
import "./index.css"


const TabBar = () => {


    return (
        <div className="tabBar__container">
            <div className="home--icon__div">
                <HomeIcon />
            </div>
            <div className="search--icon__div">
                <SearchIcon />
            </div>
            <div className="add--icon__div">
                <AddIcon />
            </div>
            <div className="like--icon__div">
                <LikeIcon />
            </div>
            <div className="profile--icon__div">
                <CameraIcon />
            </div>
        </div>
    )
}

export default TabBar  