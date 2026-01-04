import { Menu, Portal } from "@chakra-ui/react";
import { useAuthStore } from "../Auth/AuthStore";
import './User.css'

export default function User() {
    const authStore = useAuthStore();
    const signout = async () => {
        // await authStore.supabase.auth.signOut().then(() => { authStore.setSession(null) })
    }

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <div className="user">
                    {
                        authStore.session !== null && authStore.session.user.email &&
                        authStore.session.user.email[0].toUpperCase()
                    }
                </div>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="projects">Projects</Menu.Item>
                        <Menu.Item value="account">Account</Menu.Item>
                        <Menu.Item value="logout" onClick={() => signout()}>Log out</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}