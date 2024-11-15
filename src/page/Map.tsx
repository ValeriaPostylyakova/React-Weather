import Sidebar from '../components/Sidebar/Sidebar.tsx';
import Header from '../components/Header/Header.tsx';
import { MainWrapper } from '../App.tsx';

const Map = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <MainWrapper></MainWrapper>
        </>
    );
};

export default Map;
