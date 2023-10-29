import LineChart from "../components/LineChart";
import DashboardLayout from "../layouts/DashbordLayout";

export default function AnalysePage() {
  return (
    <DashboardLayout>
      <div className="w-full md:h-full p-5 bg-white">
        <LineChart />
      </div>
    </DashboardLayout>
  );
}
