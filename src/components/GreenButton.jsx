import { Button } from "reactstrap";

function GreenButton ( { onClick, type, className } ) {
    const buttonStyle = {
        backgroundColor: "#5CB85F",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    return (
        <Button style={buttonStyle} onClick={onClick} className={className}>
            <div>{ type }</div>
        </Button>
    );
}

export default GreenButton;