import NavbarMenu from './NavbarMenu';
const Layout = ({ children }) => {
    return (
        <>
            <NavbarMenu />
            {children}
        </>
    )
}

export default Layout