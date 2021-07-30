import { Card } from 'react-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap';

const Modal = (props) => {
    const options = {
        clickOverlayHandler: () => console.log('click overlay'),

        title: "Title",
        body: props.children || "Body",

        headerClass: "ps t0 l0 bgcf",
        wrapClass: "pf t50 l50 tt z100",
        cardClass: "mh1v oya pr",
        overlayClass: "pf t0 l0 r0 b0 z99 overlay",

        headerStyle: {},
        wrapStyle: {},
        cardStyle: {},
        overlayStyle: {},
        nameBtnYes:"Có",
        nameBtnNo:"Không",
        noHandler: () => { },
        yesHandler: false,

        isShow: false,
        ...props
    };
    return (
        <>
            {options.isShow && <>
                <div
                    className={options.overlayClass}
                    style={options.overlayStyle}
                    onClick={options.clickOverlayHandler}
                />
                <div
                    className={options.wrapClass}
                    style={options.wrapStyle}
                >
                    <Card
                        className={options.cardClass}
                        style={options.cardStyle}
                    >
                        <Card.Header
                            className={options.headerClass}
                            style={options.headerStyle}>
                            {options.title}
                        </Card.Header>
                        <Card.Body>
                            {options.body}
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "right" }}>
                            {options.yesHandler && <ButtonGroup>
                                <Button variant="success" onClick={options.yesHandler}>{options.nameBtnYes}</Button>
                                <Button variant="danger" onClick={options.noHandler}>{options.nameBtnNo}</Button>
                            </ButtonGroup>}
                        </Card.Footer>
                    </Card>
                </div>
            </>}
        </>
    )
}

export default Modal