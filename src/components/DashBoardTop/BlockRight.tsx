import Flex from '../Flex.tsx';
import Subtitle from '../Subtitle.tsx';
import Switch from '../Switch.tsx';
import styled from 'styled-components';
import BlockInfo from '../DashBoard/BlockInfo.tsx';
import Title from '../Title.tsx';

const GridContainer = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`;

const BlockRight = () => {
    return (
        <div style={{ width: '50%' }}>
            <Flex align="center" content="space-between" margin="0 0 2rem 0">
                <Subtitle color="#000" weight={700}>
                    Weather overview
                </Subtitle>
                <Switch width="200px" text="Daily" background={'#f7f6f6'} />
            </Flex>
            <GridContainer>
                {[...new Array(4)].map(() => (
                    <BlockInfo width="392px" padding="20px">
                        <Flex align="center">
                            <div
                                style={{
                                    padding: '0.8rem',
                                    background: '#f7f6f6',
                                    borderRadius: '100%',
                                }}
                            >
                                <img width={27} src="/wind.svg" alt="icon" />
                            </div>
                            <div>
                                <Subtitle size="16px">Wind Speed</Subtitle>
                                <Title size="27px">12 km/h</Title>
                            </div>
                        </Flex>
                    </BlockInfo>
                ))}
            </GridContainer>
        </div>
    );
};

export default BlockRight;
