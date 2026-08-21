import { statsData } from "@/data/statsData";
import "./index.css";

const StatCards = () => {
    return (
        <div className="statCardsContainer">
            {statsData.map((item) => (
                <StatCard key={item.id} data={item} />
            ))}
        </div>
    );
};

export default StatCards;

const StatCard = ({ data }) => {
    return (
        <div className="statCard">
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <p className="statCardTitle">{data.title}</p>
                    <p className="statCardValue">{data.value}</p>
                </div>
                <div>
                    <img src={data.icon} alt="" className="statCardIcon" />
                </div>
            </div>

            <div className="statCardTrend">
                <img src={data.trend} alt="" />
                <span>{data.change}</span>
                <span>{data.description}</span>
            </div>
        </div>
    );
};
