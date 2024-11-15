import styled from 'styled-components';
import { Container } from '../Header/Header.tsx';
import Flex from '../Flex.tsx';
import Text from '../../Text.tsx';
import List from './List.tsx';

const SidebarStyle = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 260px;
    background-color: #fff;
    height: 100vh;
    border-right: 1px solid #eee;
`;

const Logo = styled.div`
    height: 130px;
    display: grid;
    place-items: center;
    margin-bottom: 10px;
`;

const Sidebar = () => {
    return (
        <SidebarStyle>
            <Container duration="column" align="start" padding="0 20px 0 20px">
                <Logo>
                    <Flex align="center" gap="0.5rem">
                        <img src={'/React-Weather/logo.png'} alt="logo" />
                        <Text size="21px" color="#4b89cb" colorHover="#4b89cb">
                            Weatherni
                        </Text>
                    </Flex>
                </Logo>
                <List />
            </Container>
        </SidebarStyle>
    );
};

export default Sidebar;
