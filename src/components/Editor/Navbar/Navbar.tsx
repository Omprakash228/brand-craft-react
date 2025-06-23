import { usePath } from 'crossroad';
import './Navbar.css'
import CustomAuth from '../../../shared/components/Auth/CustomAuth';
import User from '../../../shared/components/User/User';
import { useAuthStore } from '../../../shared/components/Auth/AuthStore';

export default function Navbar() {
    const authStore = useAuthStore();
    const setPath = usePath()[1];

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
                {
                    !authStore.session &&
                    <CustomAuth />
                }
                {
                    authStore.session !== null &&
                    <User />
                }
            </div>
        </div>
    )
}