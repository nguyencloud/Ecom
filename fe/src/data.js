const data = {
  products: [
    {
      _id: "1",
      image: require("./img/DemoProduct/1.png"),
      sale: "-20%",
      name: "Xiaomi Vacuum 2 pro",
      label: "Xiaomi",
      priceOff: "19,000,000 đ",
      priceOn: "16,900,000 đ",
    },

    {
      _id: "2",
      image: require("./img/DemoProduct/2.png"),
      sale: "-20%",
      name: "Life 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "3",
      image: require("./img/DemoProduct/3.png"),
      sale: "-20%",
      name: "Ecovas ultimate 5",
      label: "Deebot Ecovas",
      priceOff: "10,000,000 đ",
      priceOn: "8,000,000 đ",
    },

    {
      _id: "4",
      image: require("./img/DemoProduct/4.png"),
      sale: "-20%",
      name: "Liectroux 2021 Pro edition",
      label: "Liectroux",
      priceOff: "5,000,000 đ",
      priceOn: "4,500,000 đ",
    },

    {
      _id: "5",
      image: require("./img/DemoProduct/5.png"),
      sale: "-20%",
      name: "Life 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },
  ],

  smallMarketTop: [
    {
      _id: "1",
      image: require("./img/SmallMarket/1.png"),
      sale: "-20%",
      name: "Hubspot",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "2",
      image: require("./img/SmallMarket/2.png"),
      sale: "-20%",
      name: "Ecovacs Deebot U2 Pro",
      label: "Ecovacs",
      priceOff: "18,000,000 đ",
      priceOn: "6.900.000 ₫",
      describe:
        "Robot hút bụi Deebot U2 Pro mang đến hiệu xuất làm sạch tối đa, với sự kết hợp hệ thống quét hút hiệu năng cao với chế độ Max+ và hệ thống lau tiên tiến có thể điều chính độ ẩm khăn lau để phù hợp với từng nhu cầu làm sạch khác nhau. Với Deebot U2 Pro bạn hoàn toàn yên tâm về việc lau dọn sàn nhà, U2 pro xử lý tốt nhiều loại bụi rác, vết bẩn sơ cấp, đặc biệt là tóc và lông thú.",
    },

    {
      _id: "3",
      image: require("./img/SmallMarket/3.png"),
      sale: "-20%",
      name: "Ecovacs Deebot T8 AIVI",
      label: "Ecovacs",
      priceOff: "18,000,000 đ",
      priceOn: "14.900.000 ₫",
      describe:
        "Robot hút bụi Deebot Ozmo T8 AIVI là sự kết hợp giữa trí tuệ nhân tạo ”AIVI” và một cỗ máy làm sạch hoàn hảo. Deebot T8 có thể nhận biết và tránh các đồ vật: tất, dép, dây điện, chân ghế,… giảm 60% việc mắc kẹt và tắc. T8 được nâng cấp hệ thống laser giúp đo khoảng cách xa gấp 2 lần và chính xác gấp 4 lần. Công nghệ tăng áp kết hợp lau thông minh Deebot T8 mang đến hiệu xuất làm sạch vượt trội.",
    },

    {
      _id: "4",
      image: require("./img/SmallMarket/4.png"),
      sale: "-20%",
      name: "Xiaomi Roborock S7",
      label: "Xiaomi",
      priceOff: "18,000,000 đ",
      priceOn: "11,490,000 đ",
      describe:
        "Một siêu phẩm hoàn toàn mới mang tới sự đột phá về công nghệ trong năm 2021. Đó chính là Robot hút bụi lau nhà Xiaomi Roborock S7 đến từ thương hiệu Roborock. Đây được coi là dòng hút bụi cao cấp của Xiaomi thời điểm hiện tại với công nghệ lau rung lần đầu tiên được áp dụng đem đến khả năng làm sạch vượt trội mà các dòng Robot trước đây chưa làm được.",
    },

    {
      _id: "5",
      image: require("./img/SmallMarket/5.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "6",
      image: require("./img/SmallMarket/6.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },
  ],

  smallMarketBot: [
    {
      _id: "7",
      image: require("./img/SmallMarket/7.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "8",
      image: require("./img/SmallMarket/8.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "9",
      image: require("./img/SmallMarket/9.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "10",
      image: require("./img/SmallMarket/10.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "11",
      image: require("./img/SmallMarket/11.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },

    {
      _id: "12",
      image: require("./img/SmallMarket/12.png"),
      sale: "-20%",
      name: "iLife 12 Pro Max",
      label: "iLife",
      priceOff: "18,000,000 đ",
      priceOn: "17,000,000 đ",
    },
  ],

  yourNeed: [
    {
      _id: "1",
      name: "Đơn giản",
      image: require("./img/YourNeed/13.jpg"),
    },

    {
      _id: "2",
      name: "Hiện đại",
      image: require("./img/YourNeed/14.jpg"),
    },

    {
      _id: "3",
      name: "Cao cấp",
      image: require("./img/YourNeed/15.jpg"),
    },

    {
      _id: "4",
      name: "Phân phối độc quyền",
      image: require("./img/YourNeed/16.jpg"),
    },

    {
      _id: "5",
      name: "Limited Edition",
      image: require("./img/YourNeed/17.jpg"),
    },
  ],
};

export const list = [
  {
    id: 1,
    name: "Baby Girl Crop Top",
  },

  {
    id: 2,
    name: "Men’s Sport Polo Shirt",
  },

  {
    id: 3,
    name: "Long Sleeve Croptop Shirt",
  },

  {
    id: 4,
    name: "Lemon Local Brand T-shirt",
  },
  {
    id: 5,
    name: "Cute Puff Sleeve Babydoll Dress",
  },
  {
    id: 6,
    name: "Plaid Spaghetti Strap Crop Top",
  },
  {
    id: 7,
    name: "Women’s Sport Set",
  },
  {
    id: 8,
    name: "Oversized Red Plaid Shirt",
  },
  {
    id: 9,
    name: "Basic Women’s Hoodie",
  },
  {
    id: 10,
    name: "V-neck Knit Sweater",
  },
  {
    id: 11,
    name: "Women’s Fleece Bomber Jacket",
  },
  {
    id: 12,
    name: "Front Slit Denim Skirt",
  },
  {
    id: 13,
    name: "Back-Tie Halter Top",
  },
  {
    id: 14,
    name: "Crop Top & Skirt Set",
  },
  {
    id: 15,
    name: "Square Neck Plaid Dress",
  },
  {
    id: 16,
    name: "Off-Shoulder Floral Maxi Dress",
  },
  {
    id: 17,
    name: "Plaid Skirt and Crop Top Set",
  },
  
];

export default data;
