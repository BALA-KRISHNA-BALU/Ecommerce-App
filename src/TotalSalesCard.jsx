import {
  AreaChart, Area, Tooltip, ResponsiveContainer
} from "recharts";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
  { value: 200 },
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 400 },
  { value: 600 },
  { value: 700 },
];

const TotalSalesCard = () => {
  return (
    <div style={{
      borderRadius: "8px",
      padding: "20px",
      background: "linear-gradient(180deg, #007bff, #0056d2)",
      color: "#fff",
      position: "relative",
      height:"360px"
    }}>
      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h4 style={{ margin: 0,fontSize:"17px",fontWeight:"600" }}>Total Sales</h4>
          <MoreVertIcon style={{ color: "#fff" }} />
        </div>
        <h2 style={{ margin: "10px 0", fontSize:"26px",fontWeight:"600", display: "flex",gap:"4px",alignItems: "center"}}>$3,787,681.00 <span style={{ color: "#6fff9f", fontSize: "16px" }}>40.63% <TrendingUpIcon style={{ fontSize: 16 }} /></span></h2>
        <p style={{fontSize:"13px"}}>$3,578.90 in last month</p>
      </div>
      <div style={{height:"190px"}}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#fff"
              fill="rgba(255,255,255,0.2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSalesCard;
