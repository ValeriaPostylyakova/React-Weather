import styled from 'styled-components';
import DashBoard from './page/DashBoard.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Header from './components/DashBoard/Header.tsx';

const Wrapper = styled.div`
    position: relative;
    z-index: 5;
    width: 100%;
    height: 100vh;
    background-color: #fff;
`;

const MainWrapper = styled.main`
    position: absolute;
    top: 130px;
    right: 0;
    z-index: 20;
    width: calc(100% - 260px);
`;

const App = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Header />
            <MainWrapper>
                <DashBoard />
            </MainWrapper>
        </Wrapper>
    );
};

export default App;
