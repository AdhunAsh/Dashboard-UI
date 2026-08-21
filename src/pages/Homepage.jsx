import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/DashBoard";

const Homepage = () => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
            }}
        >
            {/* sidebar */}
            <div
                style={{
                    display: "flex",
                    width: "240px",
                    minWidth: "240px",
                }}
            >
                <Sidebar activePage={activePage} onPageChange={setActivePage} />
            </div>

            {/* navbar and contents */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    flex: 1,
                    minWidth: 0,
                }}
            >
                <Navbar />

                <main
                    className="main-content"
                    style={{
                        flex: 1,
                        overflow: "auto",
                        backgroundColor: "#F5F6FA",
                        padding: "30px 33px  30px 30px",
                    }}
                >
                    {activePage === "dashboard" && (
                        <Dashboard />
                    )}
                    {activePage !== "dashboard" && (
                        <h1>coming soon...</h1>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Homepage;
