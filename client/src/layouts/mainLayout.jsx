import { useState } from 'react'
import Header from "../components/header"
import Sidebar from "../components/sidebar/Sidebar"
import Footer from '../components/footer'
const MainLayout = ({content}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Header toggleSidebar={() => setIsOpen(prev => !prev )} />
            <p>This is the home page of our application.</p>
            <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
            <main style={{margin: "50px 0 0 0", minHeight: "calc(100vh - 100px)"}}>
                {content}
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;