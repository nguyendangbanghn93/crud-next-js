import { Navbar, Container, Nav } from "react-bootstrap"
import Link from "next/link"
const NavbarMenu = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Link href="/" passHref><Navbar.Brand href="#home">CRUD-NEXTJS</Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link href="/" passHref><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link href="/students" passHref><Nav.Link href="#home">List Student</Nav.Link></Link>
                    <Link href="/students/create" passHref><Nav.Link href="#home">Add student</Nav.Link></Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavbarMenu