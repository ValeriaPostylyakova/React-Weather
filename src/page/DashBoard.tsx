import styled from 'styled-components';
import DashBoardTop from '../components/DashBoardTop/DashBoardTop.tsx';

const DashBoardWrapper = styled.div`
    padding: 40px 50px 30px 40px;
`;

const DashBoard = () => {
    return (
        <DashBoardWrapper>
            <DashBoardTop />
        </DashBoardWrapper>
    );
};

export default DashBoard;
