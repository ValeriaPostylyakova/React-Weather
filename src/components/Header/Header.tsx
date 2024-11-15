import styled from 'styled-components';
import Flex, { FlexProps } from '../Flex.tsx';
import Title from '../Title.tsx';
import Subtitle from '../Subtitle.tsx';
import Search from './Search.tsx';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getDate } from '../../hooks/useDate.ts';

const HeaderStyle = styled.header`
    min-height: 130px;
    width: calc(100% - 260px);
    display: flex;
    align-items: center;
    margin-left: auto;
    border-bottom: 1px solid #eee;
`;

export const Container = styled.div<FlexProps>`
    padding: ${(props) => props.padding || '10px 20px 10px 20px'};
    width: 100%;
    display: flex;
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.content || 'space-between'};
    flex-direction: ${(props) => props.duration || 'row'};
`;

const Button = styled.button`
    display: block;
    background-color: #f7f6f6;
    height: 55px;
    width: 55px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

const Header = () => {
    const [dateTop, setDateTop] = useState<string>('');
    const [dateBottom, setDateBottom] = useState<string>('');

    useEffect(() => {
        const { year, date, day, month, month2 } = getDate();
        setDateTop(String(month + ' ' + year));
        setDateBottom(`${day}, ${month2} ${date}, ${year}`);
    }, []);

    return (
        <HeaderStyle>
            <Container>
                <Flex duration="column" gap="0.5rem">
                    <Title size="25px">{dateTop}</Title>
                    <Subtitle>{dateBottom}</Subtitle>
                </Flex>
                <Flex gap="1.5rem">
                    <Search />
                    <Flex align="center">
                        <Button>
                            <FiSun
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    color: '#bdbdbd',
                                }}
                            />
                        </Button>
                        <Button>
                            <FiMoon
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    color: '#bdbdbd',
                                }}
                            />
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </HeaderStyle>
    );
};

export default Header;
