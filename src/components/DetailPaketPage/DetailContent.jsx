import { Card, Input } from "reactstrap";
import Kategori from "../CariMobilPage/Kategori";
import Harga from "../CariMobilPage/Harga";
import Status from "../CariMobilPage/Status";
import DetailHasil from "./DetailHasil";

function DetailContent () {
    return (
        <>
        <div className="container-fluid pt-4" 
        style=
        {{ 
            backgroundColor: "#F1F3FF" ,
            height: "60vh",
            overflow: "visible",
            marginBottom: "8rem",
        }}
        >

        <Card
        className="d-flex justify-content-center"
        style={{
        padding: "20px",
        margin: "20% 5% 0% 5%",
        position: "relative",
        }}>
            <h3><strong>Pencarianmu</strong></h3>
            
            <div className="d-flex flex-column flex-lg-row justify-content-center">
                <div className="m-3">
                    <h6>Nama Mobil</h6>
                    <Input style={{width:"12rem"}} placeholder="Ketik nama/tipe mobil" />
                </div>

                <div className="m-3">
                    <h6>Kategori</h6>
                    <Kategori />
                </div>

                <div className="m-3">
                    <h6>Harga</h6>
                    <Harga />
                </div>

                <div className="m-3">
                    <h6>Status</h6>
                    <Status />
                </div>
            </div>
        </Card>
        </div>

        <div className="my-lg-5 py-lg-5">
            <DetailHasil />
        </div>
        </>
    );
}

export default DetailContent;