import BellIcon from "@/assets/svg/BellIcon.svg";
import Flag from "@/assets/svg/Flag.svg";

const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: "70px",
            }}
        >
            {/* search bar */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "40px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    padding: "0 78px",
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        border: "0.6px solid #D5D5D5",
                        outline: "none",
                        backgroundColor: "#F5F6FA",
                        width: "100%",
                        height: "38px",
                        borderRadius: "19px",
                        padding: "0 16px",
                    }}
                />
            </div>

            {/* user setting */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: "26px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                    }}
                >
                    <img src={BellIcon} alt="" />
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <img src={Flag} alt="English" />
                        <span>English</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
