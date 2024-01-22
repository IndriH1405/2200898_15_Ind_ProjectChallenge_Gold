import { useParams } from "react-router-dom";
import { AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, List, UncontrolledAccordion } from "reactstrap";
import useDetail from "./useDetail";
import { formatCurrency } from "../FormatCurrenci";

function DetailHasil () {
    const params = useParams ();
    const { id } = params;

    const { detailData } = useDetail(id);
    console.log(detailData);

    return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-lg-row align-items-lg-start pb-5">
        <Card className="col-lg-6 m-lg-3">
            <CardBody>
                <CardTitle tag="h5" className="py-3">
                    <strong>Tentang Paket</strong>
                </CardTitle>
                <CardSubtitle className="pb-2">
                    <strong>Include</strong>
                </CardSubtitle>
                <CardText>
                    <List>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li> 
                        <li>Sudah termasuk bensin selama 12 jam </li>
                        <li>Sudah termasuk Tiket Wisata</li> 
                        <li>Sudah termasuk pajak</li>
                    </List>
                </CardText>
                <CardSubtitle className="pb-2">
                    <strong>Exclude</strong>
                </CardSubtitle>
                <CardText>
                    <List>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li> 
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </List>
                </CardText>
                <UncontrolledAccordion defaultOpen="1">
                    <AccordionItem>
                    <AccordionHeader targetId="1">
                        <strong>Refund, Reschedule, Overtime</strong>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <List>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li> 
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li> 
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li> 
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </List>
                    </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
            </CardBody>
        </Card>

        <Card className="col-lg-6 m-lg-3">
                <CardImg
                src= {detailData.image}
                alt= {detailData.name}
                width="70%"
                />
            <CardBody>
                <CardTitle tag="h5">
                    <strong>{detailData.name}</strong>
                </CardTitle>
                <CardSubtitle style={{fontSize: "12px"}}>
                    6-8 Orang
                </CardSubtitle>
                <CardText tag="h5" className="pt-5">
                    <strong>Total: {formatCurrency(detailData.price)}</strong>
                </CardText>
            </CardBody>
        </Card>
    </div>
    );
}

export default DetailHasil;