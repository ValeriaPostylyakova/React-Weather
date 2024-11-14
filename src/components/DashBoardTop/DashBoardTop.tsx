import Flex from '../Flex.tsx';
import BlockLeft from './BlockLeft.tsx';
import BlockRight from './BlockRight.tsx';

const DashBoardTop = () => {
    return (
        <Flex content="space-around" margin="0 0 3rem 0">
            <BlockLeft />
            <BlockRight />
        </Flex>
    );
};

export default DashBoardTop;
