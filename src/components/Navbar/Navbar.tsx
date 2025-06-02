import './Navbar.css'

export default function Navbar() {
    return (
        <div id="nav-container">
            <div id="left-container">
                <div id="app-name-container">
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