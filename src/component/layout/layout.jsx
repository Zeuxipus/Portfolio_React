import Header from "../header.jsx";

const Layout = ({children})=>{
    return (
        <>
        <Header/>
        <main>{children}</main>
        </>
    );
};
export default Layout;
