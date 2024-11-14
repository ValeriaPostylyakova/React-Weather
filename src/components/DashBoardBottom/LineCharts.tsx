import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

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
        <LineChart
            data={data}
            width={850}
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
    );
};

export default LineCharts;
