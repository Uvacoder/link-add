import logo from "../theme/logo.png";
import { BsBrush } from 'react-icons/bs';
import { VscSettingsGear } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai';

export default function Nav() {
    return (
        <div className="nav ">
            <div className="border-b cursor-pointer border-b-gray-50 w-full items-center flex justify-center h-24">
                <img className="w-10" src={logo} />
            </div>
            <div className="left-nav-menu">
                <span className="active"><AiOutlineHome size={23} /></span>
                {/* <span><VscSettingsGear size={23} /></span>
                <span><BsBrush size={23} /></span> */}
            </div>
        </div>

    )
}