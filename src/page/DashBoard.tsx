import styled from 'styled-components';
import DashBoardTop from '../components/DashBoardTop/DashBoardTop.tsx';
import DashBoardCenter from '../components/DashBoardCenter/DashBoardCenter.tsx';
import DashBoardBottom from '../components/DashBoardBottom/DashBoardBottom.tsx';

const DashBoardWrapper = styled.div`
    max-width: 95%;
    margin: 0 auto;
    padding: 40px 0 30px 0;
`;

const DashBoard = () => {
    return (
        <DashBoardWrapper>
            <DashBoardTop />
            <DashBoardCenter />
            <DashBoardBottom />
        </DashBoardWrapper>
    );
};

export default DashBoard;
