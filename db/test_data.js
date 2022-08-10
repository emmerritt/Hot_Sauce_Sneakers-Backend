const testProducts = [
  {
    name: `AIR JORDAN 1 RETRO HIGH OG 'STAGE HAZE'`,
    brandId: 1,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/299069/1.jpg`,
    price: 190.0,
  },
  {
    name: `AIR JORDAN 3 RETRO 'UNC'`,
    brandId: 1,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/149377/1.jpg`,
    price: 450.0,
  },
  {
    name: `AIR JORDAN 4 RETRO OG 'FIRE RED' 2020`,
    brandId: 1,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/178193/1.jpg`,
    price: 275.0,
  },
  {
    name: `AIR JORDAN 6 RETRO OG 'CARMINE' 2021`,
    brandId: 1,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/186762/1.jpg`,
    price: 142.0,
  },
  {
    name: `AIR JORDAN 11 RETRO 'CONCORD' 2018`,
    brandId: 1,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/805882/1.jpg`,
    price: 420.0,
  },
  {
    name: `AIR JORDAN 8 RETRO 'AQUA' 2015`,
    brandId: 1,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/012330/1.jpg`,
    price: 335.0,
  },
  {
    name: `YEEZY BOOST 350 V2 'BONE'`,
    brandId: 2,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/299345/1.jpg`,
    price: 214.0,
  },
  {
    name: `YEEZY BOOST 350 V2 'ONYX'`,
    brandId: 2,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/296515/1.jpg`,
    price: 265.0,
  },
  {
    name: `YEEZY BOOST 700 'WAVE RUNNER'`,
    brandId: 2,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/802501/1.jpg`,
    price: 344.0,
  },
  {
    name: `PHARRELL X NMD HUMAN RACE 'ANIMAL PRINT'`,
    brandId: 2,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/319624/1.jpg`,
    price: 150.0,
  },
  {
    name: `PHARRELL X NMD HUMAN RACE 'PINK'`,
    brandId: 2,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/247287/1.jpg`,
    price: 179.0,
  },
  {
    name: `PHARRELL X NMD HUMAN RACE 'YELLOW'`,
    brandId: 2,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/201357/1.jpg`,
    price: 702.0,
  },
  {
    name: `ZOOM KOBE 6 PROTRO 'GRINCH'`,
    brandId: 3,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/186215/1.jpg`,
    price: 480.0,
  },
  {
    name: `ZOOM KOBE 5 PROTRO 'BRUCE LEE'`,
    brandId: 3,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/184731/1.jpg`,
    price: 250.0,
  },
  {
    name: `ZOOM KOBE 5 PROTRO '5X CHAMP'`,
    brandId: 3,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/172611/1.jpg`,
    price: 330.0,
  },
  {
    name: `LEBRON 15 'METALLIC GOLD'`,
    brandId: 3,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/802941/1.jpg`,
    price: 380.0,
  },
  {
    name: `LEBRON 11 PREMIUM 'WHAT THE LEBRON'`,
    brandId: 3,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/042166/1.jpg`,
    price: 298.0,
  },
  {
    name: `LEBRON 10 'PURE PLATINUM'`,
    brandId: 3,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/041892/1.jpg`,
    price: 415.0,
  },
  {
    name: `TEDDY SANTIS X 990V2 MADE IN USA 'BLACK'`,
    brandId: 4,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/321270/1.jpg`,
    price: 200.0,
  },
  {
    name: `TEDDY SANTIS X 990V3 MADE IN USA 'RAW AMETHYST'`,
    brandId: 4,
    image: `https://cdn.flightclub.com/3000/TEMPLATE/322133/1.jpg`,
    price: 276.0,
  },
];

const testBrands = [
  { name: `Air Jordan` },
  { name: `Adidas` },
  { name: `Nike` },
  { name: `New Balance` },
];

const testSizes = [
  {
    gender: `Men's`,
    size: 3.5,
  },
  {
    gender: `Men's`,
    size: 4,
  },
  {
    gender: `Men's`,
    size: 4.5,
  },
  {
    gender: `Men's`,
    size: 5,
  },
  {
    gender: `Men's`,
    size: 5.5,
  },
  {
    gender: `Men's`,
    size: 6,
  },
  {
    gender: `Men's`,
    size: 6.5,
  },
  {
    gender: `Men's`,
    size: 7,
  },
  {
    gender: `Men's`,
    size: 7.5,
  },
  {
    gender: `Men's`,
    size: 8,
  },
  {
    gender: `Men's`,
    size: 8.5,
  },
  {
    gender: `Men's`,
    size: 9,
  },
  {
    gender: `Men's`,
    size: 9.5,
  },
  {
    gender: `Men's`,
    size: 10,
  },
  {
    gender: `Men's`,
    size: 10.5,
  },
  {
    gender: `Men's`,
    size: 11,
  },
  {
    gender: `Men's`,
    size: 11.5,
  },
  {
    gender: `Women's`,
    size: 5,
  },
  {
    gender: `Women's`,
    size: 5.5,
  },
  {
    gender: `Women's`,
    size: 6,
  },
  {
    gender: `Women's`,
    size: 6.5,
  },
  {
    gender: `Women's`,
    size: 7,
  },
  {
    gender: `Women's`,
    size: 7.5,
  },
  {
    gender: `Women's`,
    size: 8,
  },
  {
    gender: `Women's`,
    size: 8.5,
  },
  {
    gender: `Women's`,
    size: 9,
  },
  {
    gender: `Women's`,
    size: 9.5,
  },
  {
    gender: `Women's`,
    size: 10,
  },
  {
    gender: `Women's`,
    size: 10.5,
  },
  {
    gender: `Women's`,
    size: 11,
  },
  {
    gender: `Women's`,
    size: 11.5,
  },
];

const testInventory = [
  {
    productId: 1,
    sizeId: 2,
    stock: 120,
  },
  {
    productId: 1,
    sizeId: 3,
    stock: 210,
  },
  {
    productId: 1,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 5,
    stock: 10,
  },
  {
    productId: 1,
    sizeId: 6,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 7,
    stock: 50,
  },
  {
    productId: 1,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 10,
    stock: 60,
  },
  {
    productId: 1,
    sizeId: 11,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 13,
    stock: 5,
  },
  {
    productId: 1,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 15,
    stock: 20,
  },
  {
    productId: 1,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 3,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 5,
    stock: 1,
  },
  {
    productId: 2,
    sizeId: 6,
    stock: 120,
  },
  {
    productId: 2,
    sizeId: 7,
    stock: 50,
  },
  {
    productId: 2,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 11,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 13,
    stock: 14,
  },
  {
    productId: 2,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 15,
    stock: 20,
  },
  {
    productId: 2,
    sizeId: 16,
    stock: 50,
  },
  {
    productId: 3,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 3,
    stock: 120,
  },
  {
    productId: 3,
    sizeId: 4,
    stock: 100,
  },
  {
    productId: 3,
    sizeId: 5,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 6,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 7,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 8,
    stock: 10,
  },
  {
    productId: 3,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 11,
    stock: 5,
  },
  {
    productId: 3,
    sizeId: 12,
    stock: 120,
  },
  {
    productId: 3,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 15,
    stock: 20,
  },
  {
    productId: 3,
    sizeId: 16,
    stock: 100,
  },
  {
    productId: 4,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 3,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 5,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 6,
    stock: 50,
  },
  {
    productId: 4,
    sizeId: 7,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 9,
    stock: 10,
  },
  {
    productId: 4,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 11,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 14,
    stock: 6,
  },
  {
    productId: 4,
    sizeId: 15,
    stock: 20,
  },
  {
    productId: 4,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 18,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 20,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 21,
    stock: 120,
  },
  {
    productId: 5,
    sizeId: 22,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 24,
    stock: 120,
  },
  {
    productId: 5,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 26,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 27,
    stock: 4,
  },
  {
    productId: 5,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 29,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 30,
    stock: 20,
  },
  {
    productId: 5,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 18,
    stock: 90,
  },
  {
    productId: 6,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 20,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 21,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 22,
    stock: 120,
  },
  {
    productId: 6,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 24,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 26,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 27,
    stock: 5,
  },
  {
    productId: 6,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 29,
    stock: 25,
  },
  {
    productId: 6,
    sizeId: 30,
    stock: 20,
  },
  {
    productId: 6,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 18,
    stock: 1,
  },
  {
    productId: 7,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 20,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 21,
    stock: 8,
  },
  {
    productId: 7,
    sizeId: 22,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 24,
    stock: 120,
  },
  {
    productId: 7,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 26,
    stock: 19,
  },
  {
    productId: 7,
    sizeId: 27,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 29,
    stock: 23,
  },
  {
    productId: 7,
    sizeId: 30,
    stock: 20,
  },
  {
    productId: 7,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 18,
    stock: 40,
  },
  {
    productId: 8,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 20,
    stock: 23,
  },
  {
    productId: 8,
    sizeId: 21,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 22,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 23,
    stock: 12,
  },
  {
    productId: 8,
    sizeId: 24,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 26,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 27,
    stock: 5,
  },
  {
    productId: 8,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 8,
    sizeId: 29,
    stock: 210,
  },
  {
    productId: 8,
    sizeId: 30,
    stock: 30,
  },
  {
    productId: 8,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 18,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 20,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 21,
    stock: 80,
  },
  {
    productId: 9,
    sizeId: 22,
    stock: 2,
  },
  {
    productId: 9,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 24,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 26,
    stock: 120,
  },
  {
    productId: 9,
    sizeId: 27,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 29,
    stock: 20,
  },
  {
    productId: 9,
    sizeId: 30,
    stock: 60,
  },
  {
    productId: 9,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 18,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 19,
    stock: 120,
  },
  {
    productId: 10,
    sizeId: 20,
    stock: 2,
  },
  {
    productId: 10,
    sizeId: 21,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 22,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 24,
    stock: 7,
  },
  {
    productId: 10,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 26,
    stock: 120,
  },
  {
    productId: 10,
    sizeId: 27,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 29,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 30,
    stock: 20,
  },
  {
    productId: 10,
    sizeId: 31,
    stock: 210,
  },
  {
    productId: 11,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 3,
    stock: 5,
  },
  {
    productId: 11,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 5,
    stock: 40,
  },
  {
    productId: 11,
    sizeId: 6,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 7,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 9,
    stock: 2,
  },
  {
    productId: 11,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 11,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 12,
    stock: 10,
  },
  {
    productId: 11,
    sizeId: 13,
    stock: 120,
  },
  {
    productId: 11,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 11,
    sizeId: 15,
    stock: 120,
  },
  {
    productId: 11,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 2,
    stock: 120,
  },
  {
    productId: 12,
    sizeId: 3,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 5,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 6,
    stock: 5,
  },
  {
    productId: 12,
    sizeId: 7,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 11,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 12,
    stock: 10,
  },
  {
    productId: 12,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 15,
    stock: 20,
  },
  {
    productId: 12,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 3,
    stock: 120,
  },
  {
    productId: 13,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 5,
    stock: 10,
  },
  {
    productId: 13,
    sizeId: 6,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 7,
    stock: 5,
  },
  {
    productId: 13,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 11,
    stock: 1,
  },
  {
    productId: 13,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 13,
    sizeId: 15,
    stock: 40,
  },
  {
    productId: 13,
    sizeId: 16,
    stock: 100,
  },
  {
    productId: 14,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 3,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 5,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 6,
    stock: 120,
  },
  {
    productId: 14,
    sizeId: 7,
    stock: 5,
  },
  {
    productId: 14,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 11,
    stock: 2,
  },
  {
    productId: 14,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 14,
    sizeId: 15,
    stock: 120,
  },
  {
    productId: 14,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 18,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 20,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 21,
    stock: 120,
  },
  {
    productId: 15,
    sizeId: 22,
    stock: 2,
  },
  {
    productId: 15,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 24,
    stock: 10,
  },
  {
    productId: 15,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 26,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 27,
    stock: 40,
  },
  {
    productId: 15,
    sizeId: 28,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 29,
    stock: 120,
  },
  {
    productId: 15,
    sizeId: 30,
    stock: 20,
  },
  {
    productId: 15,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 18,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 19,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 20,
    stock: 80,
  },
  {
    productId: 16,
    sizeId: 21,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 22,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 23,
    stock: 120,
  },
  {
    productId: 16,
    sizeId: 24,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 25,
    stock: 5,
  },
  {
    productId: 16,
    sizeId: 26,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 27,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 28,
    stock: 120,
  },
  {
    productId: 16,
    sizeId: 29,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 30,
    stock: 20,
  },
  {
    productId: 16,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 18,
    stock: 5,
  },
  {
    productId: 17,
    sizeId: 19,
    stock: 10,
  },
  {
    productId: 17,
    sizeId: 20,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 21,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 22,
    stock: 120,
  },
  {
    productId: 17,
    sizeId: 23,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 24,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 25,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 26,
    stock: 56,
  },
  {
    productId: 17,
    sizeId: 27,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 28,
    stock: 2,
  },
  {
    productId: 17,
    sizeId: 29,
    stock: 20,
  },
  {
    productId: 17,
    sizeId: 30,
    stock: 120,
  },
  {
    productId: 17,
    sizeId: 31,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 3,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 4,
    stock: 120,
  },
  {
    productId: 18,
    sizeId: 5,
    stock: 120,
  },
  {
    productId: 18,
    sizeId: 6,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 7,
    stock: 2,
  },
  {
    productId: 18,
    sizeId: 8,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 10,
    stock: 28,
  },
  {
    productId: 18,
    sizeId: 11,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 12,
    stock: 23,
  },
  {
    productId: 18,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 18,
    sizeId: 15,
    stock: 87,
  },
  {
    productId: 18,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 3,
    stock: 120,
  },
  {
    productId: 19,
    sizeId: 4,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 5,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 6,
    stock: 5,
  },
  {
    productId: 19,
    sizeId: 7,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 8,
    stock: 120,
  },
  {
    productId: 19,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 11,
    stock: 210,
  },
  {
    productId: 19,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 19,
    sizeId: 14,
    stock: 120,
  },
  {
    productId: 19,
    sizeId: 15,
    stock: 2,
  },
  {
    productId: 19,
    sizeId: 16,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 2,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 3,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 4,
    stock: 120,
  },
  {
    productId: 20,
    sizeId: 5,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 6,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 7,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 8,
    stock: 201,
  },
  {
    productId: 20,
    sizeId: 9,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 10,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 11,
    stock: 40,
  },
  {
    productId: 20,
    sizeId: 12,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 13,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 14,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 15,
    stock: 20,
  },
  {
    productId: 20,
    sizeId: 16,
    stock: 20,
  },
];

const testUsers = [
  {
    username: "Jacob User",
    password: "testuser",
    email: "jacob@user.com",
  },
  {
    username: "Junwei User",
    password: "testuser",
    email: "junwei@user.com",
  },
  {
    username: "Alexis User",
    password: "testuser",
    email: "alexis@user.com",
  },
  {
    username: "Emily User",
    password: "testuser",
    email: "emily@user.com",
  },
];

const testAdmins = [
  {
    username: "Emily Admin",
    password: "testadmin",
    email: "emily@admin.com",
  },
  {
    username: "Alexis Admin",
    password: "testadmin",
    email: "alexis@admin.com",
  },
  {
    username: "Junwei Admin",
    password: "testadmin",
    email: "junwei@admin.com",
  },
  {
    username: "Jacob Admin",
    password: "testadmin",
    email: "jacob@admin.com",
  },
];

const testOrders = [
  {
    userId: 1,
  },
  {
    userId: 1,
  },
  {
    userId: 2,
  },
  {
    userId: 3,
  },
  {
    userId: 6,
  },
  {
    userId: 7,
  },
  {
    userId: 7,
  },
  { userId: 8 },
  { userId: 9 },
];

const testOrderHistory = [
  {
    orderId: 1,
    inventoryId: 5,
    count: 1,
    price: 265.0,
  },
  {
    orderId: 1,
    inventoryId: 6,
    count: 1,
    price: 265.0,
  },
  {
    orderId: 1,
    inventoryId: 9,
    count: 2,
    price: 250.0,
  },
  {
    orderId: 2,
    inventoryId: 5,
    count: 1,
    price: 265.0,
  },
  {
    orderId: 3,
    inventoryId: 1,
    count: 1,
    price: 190.0,
  },
  {
    orderId: 4,
    inventoryId: 1,
    count: 3,
    price: 190.0,
  },
  {
    orderId: 5,
    inventoryId: 3,
    count: 1,
    price: 190.0,
  },
  {
    orderId: 5,
    inventoryId: 163,
    count: 2,
    price: 220.0,
  },
  {
    orderId: 8,
    inventoryId: 3,
    count: 1,
    price: 190.0,
  },
  {
    orderId: 8,
    inventoryId: 163,
    count: 2,
    price: 220.0,
  },
  {
    orderId: 9,
    inventoryId: 3,
    count: 1,
    price: 190.0,
  },
  {
    orderId: 9,
    inventoryId: 163,
    count: 2,
    price: 220.0,
  },
];

export {
  testProducts,
  testBrands,
  testSizes,
  testInventory,
  testUsers,
  testAdmins,
  testOrders,
  testOrderHistory,
};
