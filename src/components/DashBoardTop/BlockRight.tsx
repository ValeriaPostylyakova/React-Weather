import styled from 'styled-components';
import BlockInfo from '../DashBoard/BlockInfo.tsx';
import BlockInfoRight from './BlockInfoRight.tsx';
import TitleSwitch from '../DashBoard/TitleSwitch.tsx';

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
            <TitleSwitch
                text="Weather overview"
                width="200px"
                switchText="Daily"
            />
            <GridContainer>
                <BlockInfo width="392px" padding="30px">
                    <BlockInfoRight
                        imageUrl="/wind.svg"
                        title="Wind Speed"
                        subtitle="12 km/h"
                    />
                </BlockInfo>
                <BlockInfo width="392px" padding="30px">
                    <BlockInfoRight
                        imageUrl="/rain.png"
                        title="Rain Chanse"
                        subtitle="24%"
                    />
                </BlockInfo>
                <BlockInfo width="392px" padding="30px">
                    <BlockInfoRight
                        imageUrl="/rain.png"
                        title="Pressure"
                        subtitle="720 hpa"
                    />
                </BlockInfo>
                <BlockInfo width="392px" padding="30px">
                    <BlockInfoRight
                        imageUrl="/wind.svg"
                        title="Uv Index"
                        subtitle="2"
                    />
                </BlockInfo>
            </GridContainer>
        </div>
    );
};

export default BlockRight;
