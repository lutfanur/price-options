import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Bob", math: 78, physics: 82, chemistry: 85 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 94 },
        { id: 4, name: "David", math: 65, physics: 72, chemistry: 68 },
        { id: 5, name: "Emily", math: 80, physics: 75, chemistry: 82 },
        { id: 6, name: "Fiona", math: 73, physics: 70, chemistry: 75 },
        { id: 7, name: "George", math: 88, physics: 84, chemistry: 90 },
        { id: 8, name: "Hannah", math: 91, physics: 89, chemistry: 95 },
        { id: 9, name: "Ian", math: 82, physics: 80, chemistry: 85 },
        { id: 10, name: "Jasmine", math: 75, physics: 78, chemistry: 80 }
    ];

  


    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red' ></Line>
                <Line dataKey="physics" stroke='green'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;