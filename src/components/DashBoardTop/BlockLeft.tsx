import Flex from '../Flex.tsx';
import { TbMapPinCheck } from 'react-icons/tb';
import Text from '../../Text.tsx';
import Title from '../Title.tsx';
import Subtitle from '../Subtitle.tsx';
import Switch from '../Switch.tsx';
import BlockInfo from '../DashBoard/BlockInfo.tsx';

const BlockLeft = () => {
    return (
        <BlockInfo width="40%" border="none" background={'#ecf4ff'}>
            <Flex align="center" content="space-between" margin="0 0 3rem 0">
                <Flex align="center" gap="0.5rem">
                    <TbMapPinCheck
                        style={{
                            width: '28px',
                            height: '28px',
                            color: '#4b89cb',
                        }}
                    />
                    <Text size="18px" colorHover="#4b89cb" color="#4b89cb">
                        Dashboard
                    </Text>
                </Flex>
                <Text weight={500}>Today, 00:32 PM</Text>
            </Flex>
            <Flex
                duration="column"
                align="center"
                content="center"
                gap="0.4rem"
            >
                <Title size="45px" weight={700}>
                    24°
                </Title>
                <Subtitle color="#000" margin="5rem">
                    Sunny
                </Subtitle>
                <Switch width="100%" text="Air Temperature" />
            </Flex>
        </BlockInfo>
    );
};

export default BlockLeft;
