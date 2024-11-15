import styled from 'styled-components';
import DashBoard from './page/DashBoard.tsx';

const Wrapper = styled.div`
    position: relative;
    z-index: 5;
    width: 100%;
    height: 100vh;
    background-color: #fff;
`;

export const MainWrapper = styled.main`
    position: absolute;
    top: 130px;
    right: 0;
    z-index: 20;
    width: calc(100% - 260px);
`;

const App = () => {
    return (
        <Wrapper>
            <DashBoard />
        </Wrapper>
    );
};

export default App;
