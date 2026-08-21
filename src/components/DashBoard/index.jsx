import StatCards from "../StatCards";
import DealsTable from "../DealsTable";
import SalesChart from "../SalesChart";

const Dashboard = () => {
    return (
        <div>
            <p
                style={{
                    fontFamily: "Nunito sans",
                    fontWeight: "700",
                    fontSize: "32px",
                    lineHeight: "100%",
                    letterSpacing: "-0.11px",
                    color: "#202224",

                    margin: 0,
                }}
            >
                Dashboard
            </p>

            {/* stats cards */}
            <StatCards />

            {/* charts */}
            <SalesChart />

            {/* deals details */}
            <DealsTable />
        </div>
    );
};

export default Dashboard;
