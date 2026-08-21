// import { useState } from "react";

const SalesChart = () => {
    // const [month, setMonth] = useState("October");
    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "14px",
                marginTop: "28px",
                padding: "37px 32px",
                boxShadow: "6px 6px 54px 0px #0000000D",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <p
                    style={{
                        fontFamily: "Nunito sans",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        color: "rgba(32, 34, 36, 1)",

                        margin: 0,
                    }}
                >
                    Deals Details
                </p>
                <select
                    // value={month}
                    // onChange={(e) => setMonth(e.target.value)}
                    style={{
                        width: "88px",
                        height: "30px",
                        border: "0.6px solid #D5D5D5",
                        borderRadius: "4px",
                        backgroundColor: "#FCFDFD",
                        color: "rgba(43, 48, 52, 0.4)",
                        fontSize: "11px",
                        padding: "0 8px",
                        outline: "none",
                        cursor: "pointer",
                    }}
                >
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>

            {/* chart */}
        </div>
    );
};

export default SalesChart;
