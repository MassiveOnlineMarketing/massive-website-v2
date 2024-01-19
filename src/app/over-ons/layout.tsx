import Footer from "@/components/partials/Footer";
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

            <div className='w-full overflow-hidden'>
                <Footer />
            </div>
        </>
    )
}