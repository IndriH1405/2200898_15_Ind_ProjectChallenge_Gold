import { Card, 
    CardBody,
    CardTitle,
    CardText, 
} from "reactstrap";

const TestiCard2 = () => {
    return (
    <Card
    style={{
        backgroundColor: "#F1F3FF",
        width: "619px",
        height: "270px",
    }}
    >
        <CardBody className="container-fluid d-flex flex-column flex-lg-row align-items-center">
            <CardTitle className="m-5">
                <img 
                src="src\assets\img_photo (1).png"
                width={80}
                height={80}
                />
            </CardTitle>
            <CardText>
                <div style={{fontSize: "14px"}}>
                <strong>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod”</strong>
                </div>

                <div style={{fontSize: "12px"}}>John Dee 32, Bromo</div>
            </CardText>
        </CardBody>
    </Card>
    );
}

export default TestiCard2;