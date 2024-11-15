import Header from '../components/Header/Header.tsx';
import Sidebar from '../components/Sidebar/Sidebar.tsx';
import { MainWrapper } from '../App.tsx';

const Calendar = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <MainWrapper></MainWrapper>
        </>
    );
};

export default Calendar;
