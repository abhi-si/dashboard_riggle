export const SALES_SNAPSHOT_DATA = {
  sales_snapshot: [
    { month: "April", year: 2023, target: 60, achieved: 50 },
    { month: "May", year: 2023, target: 75, achieved: 70 },
    { month: "June", year: 2023, target: 85, achieved: 80 },
    { month: "July", year: 2023, target: 90, achieved: 88 },
    { month: "August", year: 2023, target: 95, achieved: 92 },
    { month: "September", year: 2023, target: 80, achieved: 78 },
    { month: "October", year: 2023, target: 70, achieved: 65 },
    { month: "November", year: 2023, target: 85, achieved: 82 },
    { month: "December", year: 2023, target: 90, achieved: 89 },
  ],
};

export const TEAM_SNAPSHOT_DATA = {
  teamPerformance: [
    {
      id: 1,
      fullName: "Arjun Kumar",
      designation: "MD",
      imgIcon: "/arjun_icon.png", // Correct path for public folder
      target: 100000,
      achieved: 80000,
      percentageAchieved: 80,
    },
    {
      id: 2,
      fullName: "Ravi Mehta",
      designation: "MD",
      imgIcon: "/ravi_icon.png",
      target: 100000,
      achieved: 85000,
      percentageAchieved: 85,
    },
    {
      id: 3,
      fullName: "Anil Joshi",
      designation: "ASM",
      imgIcon: "/anil_icon.png",
      target: 100000,
      achieved: 75000,
      percentageAchieved: 75,
    },
    {
      id: 4,
      fullName: "Rajesh Singh",
      designation: "ASM",
      imgIcon: "/rajesh_icon.png",
      target: 100000,
      achieved: 90000,
      percentageAchieved: 90,
    },
    {
      id: 5,
      fullName: "Deepak Patel",
      designation: "SO",
      imgIcon: "/deepak_icon.png",
      target: 100000,
      achieved: 70000,
      percentageAchieved: 70,
    },
  ],
  newActivation: [
    {
      id: 1,
      fullName: "Arjun Kumar",
      designation: "MD",
      imgIcon: "/arjun_icon.png",
      target: 15,
      achieved: 12,
      percentageAchieved: 80,
    },
    {
      id: 2,
      fullName: "Ravi Mehta",
      designation: "MD",
      imgIcon: "/ravi_icon.png",
      target: 15,
      achieved: 10,
      percentageAchieved: 67,
    },
    {
      id: 3,
      fullName: "Anil Joshi",
      designation: "ASM",
      imgIcon: "/anil_icon.png",
      target: 15,
      achieved: 14,
      percentageAchieved: 93,
    },
    {
      id: 4,
      fullName: "Rajesh Singh",
      designation: "ASM",
      imgIcon: "/rajesh_icon.png",
      target: 15,
      achieved: 9,
      percentageAchieved: 60,
    },
    {
      id: 5,
      fullName: "Deepak Patel",
      designation: "SO",
      imgIcon: "/deepak_icon.png",
      target: 15,
      achieved: 11,
      percentageAchieved: 73,
    },
  ],
  skuPerformance: [
    {
      id: 1,
      fullName: "Arjun Kumar",
      designation: "MD",
      imgIcon: "/arjun_icon.png",
      target: 5000,
      achieved: 3000,
      percentageAchieved: 60,
    },
    {
      id: 2,
      fullName: "Ravi Mehta",
      designation: "MD",
      imgIcon: "/ravi_icon.png",
      target: 5000,
      achieved: 4000,
      percentageAchieved: 80,
    },
    {
      id: 3,
      fullName: "Anil Joshi",
      designation: "ASM",
      imgIcon: "/anil_icon.png",
      target: 5000,
      achieved: 3500,
      percentageAchieved: 70,
    },
    {
      id: 4,
      fullName: "Rajesh Singh",
      designation: "ASM",
      imgIcon: "/rajesh_icon.png",
      target: 5000,
      achieved: 2000,
      percentageAchieved: 40,
    },
    {
      id: 5,
      fullName: "Deepak Patel",
      designation: "SO",
      imgIcon: "/deepak_icon.png",
      target: 5000,
      achieved: 2500,
      percentageAchieved: 50,
    },
  ],
};

export const LOGIN_SNAPSHOT_DATA = {
  attendance: 200,
  live: 70,
  offline: 130,
  donutData: [
    {
      label: "Before 10:30 AM",
      value: 40,
      color: "#1CCAD8",
    },
    {
      label: "9:30-10:00 AM",
      value: 64,
      color: "#FDC516",
    },
    {
      label: "10:00-10:30 AM",
      value: 79,
      color: "#9B59B6",
    },
    {
      label: "After 10:30 AM",
      value: 97,
      color: "#2ECC71",
    },
  ],
  liveOfflineData: [
    {
      label: "Live",
      value: 70,
      color: "#1CCAD8",
    },
    {
      label: "Offline",
      value: 130,
      color: "#FDC516",
    },
  ],
};

export const NETWORK_SNAPSHOT_DATA = [
  {
    name: "Primary (Channel Partner)",
    TotalCP: 500,
    ActiveCP: 100,
    ZeroOrderCP: 400,
    NewCP: 100,
    Orders: 300,
  },
  {
    name: "Secondary (Retailers)",
    TotalCP: 50000,
    ActiveCP: 10000,
    ZeroOrderCP: 40000,
    NewCP: 10000,
    Orders: 30000,
  },
];

export const INSIGHTS_SNAPSHOT_DATA = {
  top_10_products: [
    {
      rank: 1,
      name: "Maggie",
      count: 1000,
      value: 10000,
      imageSrc: "/maggie_icon.png",
    },
    {
      rank: 2,
      name: "Nestle",
      count: 800,
      value: 8000,
      imageSrc: "/nestle_icon.png",
    },
    {
      rank: 3,
      name: "CocaCola",
      count: 700,
      value: 7000,
      imageSrc: "/cococola_icon.png",
    },
    {
      rank: 4,
      name: "Fanta",
      count: 600,
      value: 6000,
      imageSrc: "/fanta_icon.png",
    },
    {
      rank: 5,
      name: "CreamBell",
      count: 500,
      value: 5000,
      imageSrc: "/creambell_icon.png",
    },
  ],
  top_10_distributors: [
    {
      rank: 1,
      name: "Verma Enterprises",
      target: 100,
      achieved: 80,
      percentage: 80,
    },
    {
      rank: 2,
      name: "SK Enterprises",
      target: 90,
      achieved: 70,
      percentage: 77.78,
    },
    {
      rank: 3,
      name: "SP Traders",
      target: 80,
      achieved: 65,
      percentage: 81.25,
    },
    {
      rank: 4,
      name: "Gupta Enterprises",
      target: 75,
      achieved: 60,
      percentage: 80,
    },
    {
      rank: 5,
      name: "YS Traders",
      target: 70,
      achieved: 55,
      percentage: 78.57,
    },
  ],
  new_activation: [
    {
      rank: 1,
      name: "Verma Enterprises",
      achieved: 10,
      last_order_date: "5L",
    },
    {
      rank: 2,
      name: "SK Enterprises",
      achieved: 9,
      last_order_date: "5L",
    },
    {
      rank: 3,
      name: "SP Traders",
      achieved: 8,
      last_order_date: "5L",
    },
    {
      rank: 4,
      name: "Gupta Enterprises",
      achieved: 7,
      last_order_date: "5L",
    },
    {
      rank: 5,
      name: "YS Traders",
      achieved: 6,
      last_order_date: "5L",
    },
  ],
};

export const SECONDARY_SNAPSHOT_DATA = {
  labels: {
    secondarySnapshot: "Secondary Snapshot",
    dropSize: "Drop Size (AOV)",
  },
  donutData: [
    { label: "Orders", color: "#FDB813" },
    { label: "Activity", color: "#8E44AD" },
  ],
  dropSizeData: [
    { range: "<250", value: 40, color: "#1ABC9C" },
    { range: "250-500", value: 64, color: "#FDB813" },
    { range: "500-750", value: 79, color: "#8E44AD" },
    { range: ">751", value: 97, color: "#A8E22E" },
  ],
};


export const SECONDARY_COVERAGE_DATA = {
  secondary_coverage: [,
    { month: "July", year: 2023, target: 90, achieved: 88 },
    { month: "August", year: 2023, target: 95, achieved: 92 },
    { month: "September", year: 2023, target: 80, achieved: 78 },
    { month: "October", year: 2023, target: 70, achieved: 65 },
    { month: "November", year: 2023, target: 85, achieved: 82 },
    { month: "December", year: 2023, target: 90, achieved: 89 },
  ],
};

export const GAP_ANALYSIS_TEAM = {
  gap_analysis_team: {
    sales_team: [
      "Arjun Kumar(MD)",
      "Ravi Mehta(MD)",
      "Anil Joshi(ASM)",
      "Rajesh Singh(ASM):",
      "Deepak Patel(ASM):",
    ],
    order: ["100", "120", "110", "100", "120"],
    dispatch: ["20", "30", "40", "20", "30"],
    gap_analysis: ["-80", "-90", "-70", "-80", "-90"],
  },
};



export const PAYMENT_SNAPSHOT_DATA = {
  "week1": [
    {
      "date": "25/09/2024",
      "paymentPlanned": 500000,
      "paymentReceived": 450000,
      "view": true
    },
    {
      "date": "24/09/2024",
      "paymentPlanned": 500000,
      "paymentReceived": 400000,
      "view": true
    },
    {
      "date": "23/09/2024",
      "paymentPlanned": 400000,
      "paymentReceived": 320000,
      "view": true
    },
    {
      "date": "22/09/2024",
      "paymentPlanned": 500000,
      "paymentReceived": 440000,
      "view": true
    },
    {
      "date": "21/09/2024",
      "paymentPlanned": 350000,
      "paymentReceived": 210000,
      "view": true
    },
    {
      "date": "20/09/2024",
      "paymentPlanned": 400000,
      "paymentReceived": 350000,
      "view": true
    }
  ],
  "week2": [
    {
      "date": "02/10/2024",
      "paymentPlanned": 600000,
      "paymentReceived": 550000,
      "view": true
    },
    {
      "date": "01/10/2024",
      "paymentPlanned": 450000,
      "paymentReceived": 400000,
      "view": true
    },
    {
      "date": "30/09/2024",
      "paymentPlanned": 500000,
      "paymentReceived": 480000,
      "view": true
    },
    {
      "date": "29/09/2024",
      "paymentPlanned": 400000,
      "paymentReceived": 350000,
      "view": true
    },
    {
      "date": "28/09/2024",
      "paymentPlanned": 500000,
      "paymentReceived": 490000,
      "view": true
    }
  ],
  "week3": [
    {
      "date": "09/10/2024",
      "paymentPlanned": 700000,
      "paymentReceived": 680000,
      "view": true
    },
    {
      "date": "08/10/2024",
      "paymentPlanned": 550000,
      "paymentReceived": 500000,
      "view": true
    },
    {
      "date": "07/10/2024",
      "paymentPlanned": 600000,
      "paymentReceived": 580000,
      "view": true
    },
    {
      "date": "06/10/2024",
      "paymentPlanned": 450000,
      "paymentReceived": 420000,
      "view": true
    },
    {
      "date": "05/10/2024",
      "paymentPlanned": 400000,
      "paymentReceived": 390000,
      "view": true
    }
  ],
  "week4": [
    {
      "date": "16/10/2024",
      "paymentPlanned": 750000,
      "paymentReceived": 700000,
      "view": true
    },
    {
      "date": "15/10/2024",
      "paymentPlanned": 600000,
      "paymentReceived": 580000,
      "view": true
    },
    {
      "date": "14/10/2024",
      "paymentPlanned": 500000,
      "paymentReceived": 470000,
      "view": true
    },
    {
      "date": "13/10/2024",
      "paymentPlanned": 450000,
      "paymentReceived": 430000,
      "view": true
    },
    {
      "date": "12/10/2024",
      "paymentPlanned": 400000,
      "paymentReceived": 380000,
      "view": true
    }
  ]
}
