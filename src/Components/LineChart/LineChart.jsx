import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {
    const mathMarkData = [
      {
        name: "Student 1",
        math_score: 85,
        physics_score: 78,
        chemistry_score: 90,
      },
      {
        name: "Student 2",
        math_score: 78,
        physics_score: 82,
        chemistry_score: 85,
      },
      {
        name: "Student 3",
        math_score: 92,
        physics_score: 88,
        chemistry_score: 94,
      },
      {
        name: "Student 4",
        math_score: 67,
        physics_score: 72,
        chemistry_score: 68,
      },
      {
        name: "Student 5",
        math_score: 73,
        physics_score: 65,
        chemistry_score: 70,
      },
      {
        name: "Student 6",
        math_score: 88,
        physics_score: 90,
        chemistry_score: 85,
      },
      {
        name: "Student 7",
        math_score: 80,
        physics_score: 85,
        chemistry_score: 82,
      },
      {
        name: "Student 8",
        math_score: 95,
        physics_score: 92,
        chemistry_score: 98,
      },
      {
        name: "Student 9",
        math_score: 72,
        physics_score: 68,
        chemistry_score: 75,
      },
      {
        name: "Student 10",
        math_score: 82,
        physics_score: 75,
        chemistry_score: 80,
      },
    ];

    return (
      <div>
        <LChart width={500} height={400} data={mathMarkData}>
          <Line dataKey="math_score" stroke="#8884d8"></Line>
          <Line dataKey="physics_score" stroke="purple"></Line>
          <Line dataKey="chemistry_score" stroke="yellow"></Line>
        </LChart>
      </div>
    );
};

export default LineChart;
