import { statsData } from "@/data/statsData";

const StatCards = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "30px",
                marginTop: "27px",
            }}
        >
            {statsData.map((item) => (
                <StatCard key={item.id} data={item} />
            ))}
        </div>
    );
};

export default StatCards;

const StatCard = ({ data }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                boxShadow: "6px 6px 54px 0px #0000000D",
                borderRadius: "14px",
                width: "262px",
                minWidth: "240px",
            }}
        >
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
                    <p
                        style={{
                            margin: 0,

                            fontFamily: "Nunito sans",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "100%",
                            color: "#202224",
                        }}
                    >
                        {data.title}
                    </p>
                    <p
                        style={{
                            margin: 0,

                            fontFamily: "Nunito sans",
                            fontWeight: "700",
                            fontSize: "28px",
                            lineHeight: "100%",
                            letterSpacing: "1px",
                            color: "#202224",
                        }}
                    >
                        {data.value}
                    </p>
                </div>
                <div>
                    <img
                        src={data.icon}
                        alt=""
                        style={{
                            height: "60px",
                            width: "60px",
                        }}
                    />
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "30px",
                }}
            >
                <img src={data.trend} alt="" />
                <span>{data.change}</span>
                <span>{data.description}</span>
            </div>
        </div>
    );
};

// <div>
//     <p>{data.title}</p>

//     <h2>{data.value}</h2>

//     <img src={data.icon} alt="" />

//     <span>{data.change}</span>
//     <span>{data.description}</span>
// </div>
