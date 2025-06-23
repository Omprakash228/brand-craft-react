import { Auth } from "@supabase/auth-ui-react"
import { useEffect, useState } from "react"
import './CustomAuth.css'
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useAuthStore } from "./AuthStore"
import { CloseButton, Dialog, Portal } from "@chakra-ui/react"

export default function CustomAuth() {
    const [open, setOpen] = useState(false)
    const authStore = useAuthStore();

    useEffect(() => {
        authStore.supabase.auth.getSession().then(({ data: { session } }) => { authStore.setSession(session) })
        const {
            data: { subscription },
        } = authStore.supabase.auth.onAuthStateChange((_event, session) => { authStore.setSession(session) })
        return () => subscription.unsubscribe()
    }, [])

    return (
        <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Dialog.Trigger asChild>
                <div className="nav-item">Log in</div>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Body>
                            <Auth
                                supabaseClient={authStore.supabase}
                                appearance={{
                                    extend: true,
                                    theme: ThemeSupa,
                                    className: {
                                        button: 'custom-auth-button',
                                        input: 'custom-auth-input',
                                        container: 'custom-auth-container'
                                    }
                                }}
                                providers={[]} />
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>

    )
}