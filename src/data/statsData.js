import Graph from "@/assets/svg/Graph.svg";
import Group from "@/assets/svg/Group.svg";
import Order from "@/assets/svg/Order.svg";
import PendingTime from "@/assets/svg/PendingTime.svg";
import TrendUp from "@/assets/svg/TrendUp.svg";
import TrendDown from "@/assets/svg/TrendDown.svg";

export const statsData = [
    {
        id: 1,
        title: "Total User",
        icon: Group,
        value: "40,689",
        change: "8.5%",
        trend: TrendUp,
        description: "Up from yesterday",
    },
    {
        id: 2,
        title: "Total Order",
        icon: Order,
        value: "10293",
        change: "1.3%",
        trend: TrendUp,
        description: "Up from past week",
    },
    {
        id: 3,
        title: "Total Sales",
        icon: Graph,
        value: "$89,000",
        change: "4.3%",
        trend: TrendDown,
        description: "Down from yesterday",
    },
    {
        id: 4,
        title: "Total Pending",
        icon: PendingTime,
        value: "2040",
        change: "1.8%",
        trend: TrendUp,
        description: "Up from yesterday",
    },
];
