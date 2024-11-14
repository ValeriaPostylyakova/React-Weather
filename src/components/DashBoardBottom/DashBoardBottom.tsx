import Flex from '../Flex.tsx';
import LineCharts from './LineCharts.tsx';
import BarCharts from './BarCharts.tsx';

const DashBoardBottom = () => {
    return (
        <Flex width="100%" content="space-between">
            <LineCharts />
            <BarCharts />
        </Flex>
    );
};

export default DashBoardBottom;
