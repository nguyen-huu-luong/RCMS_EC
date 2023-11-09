import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const MainLayout = ({ children }) => {

    return (
        <>
            <Header />
            <div className="px-5 pb-5" style={{minHeight: 600}}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout