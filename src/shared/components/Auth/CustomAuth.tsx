import { Auth } from "@supabase/auth-ui-react"
import { createClient, type Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import './CustomAuth.css'
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useAuthStore } from "./AuthStore"
import { CloseButton, Dialog, Portal } from "@chakra-ui/react"

const supabase = createClient('https://wxveujokpwgpajidobsz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dmV1am9rcHdncGFqaWRvYnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MTIyNTIsImV4cCI6MjA2NDk4ODI1Mn0.5b5m04f8tmunQ0_C_YubsjPM12SmwMGVj4tLFrxPQfo')

export default function CustomAuth() {
    const [open, setOpen] = useState(false)
    const authStore = useAuthStore();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => { authStore.setSession(session); console.log(session) })
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => { authStore.setSession(session); console.log(session) })
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
                                supabaseClient={supabase}
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