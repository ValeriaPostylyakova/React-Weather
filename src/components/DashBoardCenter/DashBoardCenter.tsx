import Flex from '../Flex.tsx';
import TitleSwitch from '../DashBoard/TitleSwitch.tsx';
import BlockInfo from '../DashBoard/BlockInfo.tsx';
import BlockInfoRight from '../DashBoardTop/BlockInfoRight.tsx';

const DashBoardCenter = () => {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <TitleSwitch
                text="Weather prediction"
                width="400px"
                switchText="This week"
            />
            <Flex width="100%">
                {[...new Array(7)].map((_, index: number) => (
                    <BlockInfo key={index} width="15%" padding="30px 20px">
                        <BlockInfoRight
                            imageUrl="/React-Weather/rain.png"
                            title="Sun"
                            subtitle="24°"
                        />
                    </BlockInfo>
                ))}
            </Flex>
        </div>
    );
};

export default DashBoardCenter;
