import Navibar from "../components/Navibar";
import Heroes from "../components/Heroes";
import Pencarian from "../components/CariMobilPage/Pencarian";
import Footer from "../components/Footer";

function CariMobil () {
    return (
        <>
            <Navibar />

            <Heroes showGreenButton={false} />

            <Pencarian />

            <Footer />
        </>
    );
}

export default CariMobil;