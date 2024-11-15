import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import BlockInfo from '../DashBoard/BlockInfo.tsx';
import Subtitle from '../Subtitle.tsx';

const data = [
    {
        name: 'Week 1',
        uv: 30,
    },
    {
        name: 'Week 2',
        uv: 10,
    },
    {
        name: 'Week 3',
        uv: 37,
    },
    {
        name: 'Week 4',
        uv: 13,
    },
];

const LineCharts = () => {
    return (
        <BlockInfo padding="20px" width="60%">
            <Subtitle color="#000" margin="1rem" weight={700}>
                Average Weekly Temperature
            </Subtitle>
            <ResponsiveContainer
                width="100%"
                height="100%"
                minHeight="300px"
                maxHeight={300}
            >
                <LineChart
                    data={data}
                    width={500}
                    height={300}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#4b89cb" />
                </LineChart>
            </ResponsiveContainer>
        </BlockInfo>
    );
};

export default LineCharts;
