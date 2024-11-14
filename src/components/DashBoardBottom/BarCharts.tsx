import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

const data = [
    {
        name: 'Sun',
        uv: 4000,
        pv: 2400,
        ww: 300,
        amt: 2400,
    },
    {
        name: 'Mon',
        uv: 3000,
        pv: 1398,
        ww: 1300,
        amt: 2210,
    },
    {
        name: 'Tue',
        uv: 2000,
        pv: 9800,
        ww: 8000,
        amt: 2290,
    },
    {
        name: 'Wed',
        uv: 2780,
        pv: 3908,
        ww: 500,
        amt: 2000,
    },
    {
        name: 'Thu',
        uv: 1890,
        pv: 4800,
        ww: 7600,
        amt: 2181,
    },
    {
        name: 'Fri',
        uv: 2390,
        pv: 3800,
        ww: 1640,
        amt: 2500,
    },
    {
        name: 'Sat',
        uv: 3490,
        pv: 4300,
        ww: 7600,
        amt: 2100,
    },
];

const BarCharts = () => {
    return (
        <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="pv" stackId="a" fill="#0c294f" />
            <Bar dataKey="uv" stackId="a" fill="#4b89cb" />
            <Bar dataKey="ww" stackId="a" fill="#ccddf3" />
        </BarChart>
    );
};

export default BarCharts;
