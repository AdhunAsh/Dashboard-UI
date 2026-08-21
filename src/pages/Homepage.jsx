import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/DashBoard";
import "../index.css";

const Homepage = () => {
    const [activePage, setActivePage] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            {/* sidebar */}
            <div
                className={`sidebar-container ${
                    isSidebarOpen ? "sidebar-open" : ""
                }`}
                style={{
                    display: "flex",
                    width: "240px",
                    minWidth: "240px",
                }}
            >
                <Sidebar
                    activePage={activePage}
                    onPageChange={setActivePage}
                    onClose={() => setIsSidebarOpen(false)}
                    isSidebarOpen={isSidebarOpen}
                />
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
                <Navbar
                    onMenuClick={() => setIsSidebarOpen(true)}
                    isSidebarOpen={isSidebarOpen}
                />

                <main
                    className="main-content"
                    style={{
                        flex: 1,
                        overflow: "auto",
                        backgroundColor: "#F5F6FA",
                        padding: "30px 33px  30px 30px",
                    }}
                >
                    {activePage === "dashboard" && <Dashboard />}
                    {activePage !== "dashboard" && <h1>coming soon...</h1>}
                </main>
            </div>
        </div>
    );
};

export default Homepage;
