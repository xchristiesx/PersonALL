import Header from "./Header.jsx"
import Footer from "./Footer.jsx";

export const GenericPage = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer />
        </>
    );
};