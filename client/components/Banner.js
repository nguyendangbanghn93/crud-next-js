import { Container } from "react-bootstrap"

const Banner = ({ title, children }) => {

    return (
        <Container>
            <div style={{
                background: "#eee",
                padding: "25px"
            }}>
                <h1 className="display-3">{title}</h1>
                {children}
            </div>
        </Container>

    )
}

export default Banner