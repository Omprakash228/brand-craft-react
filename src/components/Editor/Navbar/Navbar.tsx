import { usePath } from 'crossroad';
import './Navbar.css'

export default function Navbar() {
    const [path, setPath] = usePath();
    
    return (
        <div id="nav-container">
            <div id="left-container">
                <div id="app-name-container" onClick={() => setPath('/')}>
                    <div id="logo"></div>
                    <div id="app-name">Brand Craft</div>
                </div>
                <div id="version-container">v1.0-beta</div>
            </div>
            <div id="right-container">
                {/* <button>Export PNG</button> */}
            </div>
        </div>
    )
}