
import Colections from './Colections';
import FooterHome from '../Footer';
import HighLight from './HighLight';
import Instagram from './Instagram';
import Popular from './Popular';
import Slider from './Slider';

const Home = () => {

    return (
        <>
            <Slider/>
            <HighLight/>
            <Colections/>
            <Instagram/>
            <Popular/>
            <FooterHome/>
        </>
    )
}

export default Home