import { Navbar } from "@/components/partials/Navbar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="pt-12">
                {children}
            </main>
        </>
    )
}