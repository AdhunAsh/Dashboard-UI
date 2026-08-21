import { useState } from "react";
import { salesData } from "../../data/salesData";
import Chart from "react-apexcharts";

const SalesChart = () => {
    const [month, setMonth] = useState("October");
    const values = salesData[month];
    const categories = values.map((_, index) => `${index * 5}k`);

    const highestValue = Math.max(...values);
    const highestIndex = values.indexOf(highestValue);

    const series = [
        {
            name: "Sales",
            data: values,
        },
    ];

    const options = {
        chart: {
            type: "area",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },

        colors: ["#4379EE"],
        stroke: {
            curve: "straight",
            width: 1.5,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [70, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },

        markers: {
            size: 0,

            discrete: values
                .map((value, index) => {
                    // Show dots only for selected points
                    if (index % 3 === 0 || value >= 65000) {
                        return {
                            seriesIndex: 0,
                            dataPointIndex: index,
                            fillColor: "#4379EE",
                            strokeColor: "#4379EE",
                            size: 3,
                        };
                    }

                    return null;
                })
                .filter(Boolean),

            hover: {
                size: 5,
            },
        },

        grid: {
            borderColor: "#EAEAEA",
            strokeDashArray: 0,

            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        xaxis: {
            categories,

            labels: {
                style: {
                    colors: "rgba(43, 48, 52, 0.4)",
                    fontSize: "12px",
                    fontFamily: "Nunito Sans",
                    fontWeight: 600,
                    lineHeight: "9px",
                },

                formatter: (value) => {
                    if (value === "0k") {
                        return "";
                    }

                    return value;
                },
            },

            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },

        yaxis: {
            min: 20000,
            max: 100000,
            tickAmount: 4,

            labels: {
                formatter: (value) => `${value / 1000}%`,
                style: {
                    colors: "rgba(43, 48, 52, 0.4)",
                    fontSize: "12px",
                    fontFamily: "Nunito Sans",
                    fontWeight: 600,
                    lineHeight: "9px",
                },
            },
        },

        tooltip: {
            theme: "light",
            marker: {
                show: false,
            },
            // y: {
            //     formatter: (value) =>
            //         value.toLocaleString("en-US", {
            //             minimumFractionDigits: 2,
            //             maximumFractionDigits: 2,
            //         }),
            // },
        },

        annotations: {
            points: [
                {
                    x: categories[highestIndex],
                    y: highestValue,

                    marker: {
                        size: 4,
                        fillColor: "#4379EE",
                        strokeColor: "#4379EE",
                    },

                    label: {
                        text: highestValue.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }),

                        borderColor: "#4379EE",

                        style: {
                            background: "#4379EE",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: 700,
                            fontFamily: "Nunito Sans",
                            lineHeight: "100%",
                        },

                        offsetY: -10,
                    },
                },

                {
                    x: categories[highestIndex],
                    y: highestValue,

                    marker: {
                        size: 0,
                    },

                    label: {
                        text: "▼",

                        borderColor: "transparent",

                        style: {
                            background: "transparent",
                            color: "#4379EE",
                            fontSize: "10px",
                            fontWeight: 700,
                        },

                        offsetY: -3,
                    },
                },
            ],
        },
    };

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
                    Sales Details
                </p>
                <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
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
                    <option value="January">January</option>
                </select>
            </div>

            {/* chart */}
            <div
                style={{
                    marginTop: "51px",
                }}
            >
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    height={278}
                    width="100%"
                />
            </div>
        </div>
    );
};

export default SalesChart;
