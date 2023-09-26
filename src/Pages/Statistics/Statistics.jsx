import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("Donation"));
    if (donatedItems) {
      setValue(donatedItems);
    } else {
      setValue([]);
    }
  }, []);
  console.log(value.length);
  const data = [
    { name: "Your Donation", value: value.length },
    { name: "Total Donation", value: 12 - value.length },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className=" mt-5 flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className=" flex justify-center mt-8 gap-5">
        <div className="flex items-center gap-5">
          <h2 className="text-bold text-xl">Your Donation</h2>
          <div className="w-[100px] h-[12px] bg-[#00C49F]"></div>
        </div>
        <div className="flex items-center gap-5">
          <h2 className="text-bold text-xl">Total Donation</h2>
          <div className="w-[100px] h-[12px] bg-[#FF444A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
