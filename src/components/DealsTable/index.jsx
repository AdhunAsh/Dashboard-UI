import { useState } from "react";
import "./index.css";
import { dealsData } from "../../data/dealsData";

const DealsTable = () => {
    const [month, setMonth] = useState("October");
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const searchValue = search.toLowerCase();

    const filteredDeals = dealsData.filter((deal) => {
        const matchesSearch =
            deal.product.toLowerCase().includes(searchValue) ||
            deal.location.toLowerCase().includes(searchValue) ||
            deal.status.toLowerCase().includes(searchValue);

        const matchesStatus = status === "All" || deal.status === status;

        const matchesMonth = deal.month === month;

        return matchesSearch && matchesStatus && matchesMonth;
    });

    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "14px",
                marginTop: "28px",
                padding: "37px 32px",
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
                </select>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        border: "0.6px solid #D1D1DB",
                        outline: "none",
                        boxShadow: "none",
                        backgroundColor: "#F7F7FA",
                        width: "208px",
                        height: "26px",
                        borderRadius: "6px",
                        padding: "0 16px",
                        marginTop: "16px",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                        alignItems: "center",
                        marginTop: "16px",
                    }}
                >
                    <button
                        className="statusButton"
                        onClick={() => setStatus("All")}
                        style={{
                            backgroundColor:
                                status === "All" ? "#000000" : "#F1F1F1",
                            color: status === "All" ? "#FFFFFF" : "#555555",
                        }}
                    >
                        All
                    </button>
                    <button
                        className="statusButton"
                        onClick={() => setStatus("Delivered")}
                        style={{
                            backgroundColor:
                                status === "Delivered" ? "#00B69B" : "#E5F7E8",
                            color:
                                status === "Delivered" ? "#FFFFFF" : "#249133",
                        }}
                    >
                        Delivered
                    </button>
                    <button
                        className="statusButton"
                        onClick={() => setStatus("Pending")}
                        style={{
                            backgroundColor:
                                status === "Pending" ? "#C4780A" : "#FFF2DE",
                            color: status === "Pending" ? "#FFFFFF" : "#C4780A",
                        }}
                    >
                        Pending
                    </button>
                    <button
                        className="statusButton"
                        onClick={() => setStatus("Rejected")}
                        style={{
                            backgroundColor:
                                status === "Rejected" ? "#B81F21" : "#FCE8E8",
                            color:
                                status === "Rejected" ? "#FFFFFF" : "#B81F21",
                        }}
                    >
                        Rejected
                    </button>
                </div>
            </div>

            {/* table */}
            <table
                style={{
                    width: "100%",
                    marginTop: "16px",
                    borderCollapse: "collapse",
                }}
            >
                <tHead>
                    <tr
                        style={{
                            height: "40px",
                            backgroundColor: "#F1F4F9",
                        }}
                    >
                        <th
                            className="tablehead"
                            style={{
                                width: "22%",
                            }}
                        >
                            Product Name
                        </th>
                        <th
                            className="tablehead"
                            style={{
                                width: "22%",
                            }}
                        >
                            Location
                        </th>
                        <th
                            className="tablehead"
                            style={{
                                width: "20%",
                            }}
                        >
                            Date - Time
                        </th>
                        <th
                            className="tablehead"
                            style={{
                                width: "15%",
                            }}
                        >
                            Piece
                        </th>
                        <th
                            className="tablehead"
                            style={{
                                width: "15%",
                            }}
                        >
                            Amount
                        </th>
                        <th
                            className="tablehead"
                            style={{
                                width: "15%",
                            }}
                        >
                            Status
                        </th>
                    </tr>
                </tHead>

                <tbody>
                    {filteredDeals.length > 0 ? (
                        filteredDeals.map((deal) => (
                            <tr
                                key={deal.id}
                                style={{
                                    height: "62px",
                                    borderBottom: "1px solid #EEEEEE",
                                }}
                            >
                                <td
                                    style={{
                                        padding: "0 20px",
                                        fontFamily: "Nunito Sans",
                                        fontSize: "14px",
                                        color: "#202224",
                                        lineHeight: "100%",
                                        fontWeight: 600,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {deal.product}
                                </td>
                                <td
                                    style={{
                                        padding: "0 20px",
                                        fontFamily: "Nunito Sans",
                                        fontSize: "14px",
                                        color: "#202224",
                                        lineHeight: "100%",
                                        fontWeight: 600,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {deal.location}
                                </td>
                                <td
                                    style={{
                                        padding: "0 20px",
                                        fontFamily: "Nunito Sans",
                                        fontSize: "14px",
                                        color: "#202224",
                                        lineHeight: "100%",
                                        fontWeight: 600,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {deal.date} - {deal.time}
                                </td>
                                <td
                                    style={{
                                        padding: "0 20px",
                                        fontFamily: "Nunito Sans",
                                        fontSize: "14px",
                                        color: "#202224",
                                        lineHeight: "100%",
                                        fontWeight: 600,
                                    }}
                                >
                                    {deal.piece}
                                </td>
                                <td
                                    style={{
                                        padding: "0 20px",
                                        fontFamily: "Nunito Sans",
                                        fontSize: "14px",
                                        color: "#202224",
                                        lineHeight: "100%",
                                        fontWeight: 600,
                                    }}
                                >
                                    {deal.amount}
                                </td>
                                <td
                                    style={{
                                        padding: "0 20px",
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-block",
                                            padding: "6px 14px",
                                            borderRadius: "14px",
                                            backgroundColor:
                                                deal.status === "Delivered"
                                                    ? "#00B69B"
                                                    : deal.status === "Pending"
                                                      ? "#FFF2DE"
                                                      : "#FCE8E8",
                                            color:
                                                deal.status === "Delivered"
                                                    ? "#FFFFFF"
                                                    : deal.status === "Pending"
                                                      ? "#C4780A"
                                                      : "#B81F21",
                                            fontFamily: "Nunito Sans",
                                            fontSize: "11px",
                                            fontWeight: 600,
                                            lineHeight: "1",
                                        }}
                                    >
                                        {deal.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="6"
                                style={{
                                    textAlign: "center",
                                    padding: "40px 0",
                                    fontFamily: "Nunito Sans",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#999999",
                                }}
                            >
                                No Deal Details Available for this month.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DealsTable;
