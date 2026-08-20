import "./index.css";

const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "favorites", label: "Favorites" },
    { id: "inbox", label: "Inbox" },
    { id: "orders", label: "Order Lists" },
    { id: "stock", label: "Product Stock" },
];

const pageItems = [
    { id: "pricing", label: "Pricing" },
    { id: "calendar", label: "Calendar" },
    { id: "todo", label: "To-Do" },
    { id: "contact", label: "Contact" },
    { id: "invoice", label: "Invoice" },
    { id: "ui-elements", label: "UI Elements" },
    { id: "team", label: "Team" },
    { id: "table", label: "Table" },
];

const items =[
    { id: "settings", label: "Settings" },
    { id: "logout", label: "Logout" },
]
const Sidebar = ({ activePage, onPageChange }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "24px",
                width: "100%",
            }}
        >
            {/* title */}
            <p
                style={{
                    margin: 0,
                    paddingLeft: "66px",
                    fontFamily: "Nunito",
                    fontWeight: "800",
                    lineHeight: "100%",
                    fontSize: "24px",
                    color: "#4880FF",
                }}
            >
                Dash<span style={{ color: "#202224" }}>Stack</span>
            </p>

            {/* menu items */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "30px",
                    marginBottom: "16px",
                }}
            >
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        style={{
                            position: "relative",
                            width: "calc(100% - 40px)",
                            height: "50px",
                            margin: "0 20px",
                            padding: 0,
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:
                                activePage === item.id
                                    ? "#4880FF"
                                    : "transparent",
                            color:
                                activePage === item.id ? "#FFFFFF" : "#202224",
                            fontFamily: "Nunito sans",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "100%",
                            letterSpacing: "0.3px",
                            cursor: "pointer",
                        }}
                    >
                        {item.label}

                        {/* Active left indicator */}
                        {activePage === item.id && (
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-20px",
                                    top: 0,
                                    width: "4px",
                                    height: "100%",
                                    backgroundColor: "#4880FF",
                                    borderRadius: "4px",
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* border line */}
            <div
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#E0E0E0",
                }}
            />

            {/* page items */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "16px",
                    marginBottom: "16px",
                }}
            >
                <p
                    style={{
                        paddingLeft: "40px",
                        color: "#202224",
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: "100%",
                        letterSpacing: "0.26px",
                        marginTop: "0px",
                        marginBottom: "16px",
                    }}
                >
                    PAGES
                </p>
                {pageItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        style={{
                            position: "relative",
                            width: "calc(100% - 40px)",
                            height: "50px",
                            margin: "0 20px",
                            padding: 0,
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:
                                activePage === item.id
                                    ? "#4880FF"
                                    : "transparent",
                            color:
                                activePage === item.id ? "#FFFFFF" : "#202224",
                            fontFamily: "Nunito sans",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "100%",
                            letterSpacing: "0.3px",
                            cursor: "pointer",
                        }}
                    >
                        {item.label}

                        {activePage === item.id && (
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-20px",
                                    top: 0,
                                    width: "4px",
                                    height: "100%",
                                    backgroundColor: "#4880FF",
                                    borderRadius: "4px",
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* border line */}
            <div
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#E0E0E0",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "16px",
                }}
            >
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        style={{
                            position: "relative",
                            width: "calc(100% - 40px)",
                            height: "50px",
                            margin: "0 20px",
                            padding: 0,
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:
                                activePage === item.id
                                    ? "#4880FF"
                                    : "transparent",
                            color:
                                activePage === item.id ? "#FFFFFF" : "#202224",
                            fontFamily: "Nunito sans",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "100%",
                            letterSpacing: "0.3px",
                            cursor: "pointer",
                        }}
                    >
                        {item.label}

                        {activePage === item.id && (
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-20px",
                                    top: 0,
                                    width: "4px",
                                    height: "100%",
                                    backgroundColor: "#4880FF",
                                    borderRadius: "4px",
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
