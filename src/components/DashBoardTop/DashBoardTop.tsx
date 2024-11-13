import Flex from '../Flex.tsx';
import BlockLeft from './BlockLeft.tsx';
import BlockRight from './BlockRight.tsx';

const DashBoardTop = () => {
    return (
        <Flex content="space-between">
            <BlockLeft />
            <BlockRight />
        </Flex>
    );
};

export default DashBoardTop;
