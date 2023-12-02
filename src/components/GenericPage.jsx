import Header from "./Header.jsx"

export const GenericPage = (props) => {
    return (
        <>
            <Header />
            { props.children }
        </>
    );
};