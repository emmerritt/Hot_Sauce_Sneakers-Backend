const testProducts = [
    {
        name: `AIR JORDAN 1 RETRO HIGH OG 'STAGE HAZE'`,
        brandId: 1,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/299069/1.jpg`,
        price: 190.00
    },
    {
        name: `AIR JORDAN 3 RETRO 'UNC'`,
        brandId: 1,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/149377/1.jpg`,
        price: 450.00
    },
    {
        name: `AIR JORDAN 4 RETRO OG 'FIRE RED' 2020`,
        brandId: 1,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/178193/1.jpg`,
        price: 275.00
    },
    {
        name: `AIR JORDAN 6 RETRO OG 'CARMINE' 2021`,
        brandId: 1,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/186762/1.jpg`,
        price: 142.00
    },
    {
        name: `AIR JORDAN 11 RETRO 'CONCORD' 2018`,
        brandId: 1,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/805882/1.jpg`,
        price: 420.00
    },
    {
        name: `AIR JORDAN 8 RETRO 'AQUA' 2015`,
        brandId: 1,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/012330/1.jpg`,
        price: 335.00
    },
    {
        name: `YEEZY BOOST 350 V2 'BONE'`,
        brandId: 2,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/299345/1.jpg`,
        price: 214.00
    },
    {
        name: `YEEZY BOOST 350 V2 'ONYX'`,
        brandId: 2,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/296515/1.jpg`,
        price: 265.00
    },
    {
        name: `YEEZY BOOST 700 'WAVE RUNNER'`,
        brandId: 2,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/802501/1.jpg`,
        price: 344.00
    },
    {
        name: `PHARRELL X NMD HUMAN RACE 'ANIMAL PRINT'`,
        brandId: 2,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/319624/1.jpg`,
        price: 150.00
    },
    {
        name: `PHARRELL X NMD HUMAN RACE 'PINK'`,
        brandId: 2,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/247287/1.jpg`,
        price: 179.00
    },
    {
        name: `PHARRELL X NMD HUMAN RACE 'YELLOW'`,
        brandId: 2,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/201357/1.jpg`,
        price: 702.00
    },
    {
        name: `ZOOM KOBE 6 PROTRO 'GRINCH'`,
        brandId: 3,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/186215/1.jpg`,
        price: 480.00
    },
    {
        name: `ZOOM KOBE 5 PROTRO 'BRUCE LEE'`,
        brandId: 3,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/184731/1.jpg`,
        price: 250.00
    },
    {
        name: `ZOOM KOBE 5 PROTRO '5X CHAMP'`,
        brandId: 3,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/172611/1.jpg`,
        price: 330.00
    },
    {
        name: `LEBRON 15 'METALLIC GOLD'`,
        brandId: 3,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/802941/1.jpg`,
        price: 380.00
    },
    {
        name: `LEBRON 11 PREMIUM 'WHAT THE LEBRON'`,
        brandId: 3,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/042166/1.jpg`,
        price: 298.00
    },
    {
        name: `LEBRON 10 'PURE PLATINUM'`,
        brandId: 3,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/041892/1.jpg`,
        price: 415.00
    },
    {
        name: `TEDDY SANTIS X 990V2 MADE IN USA 'BLACK'`,
        brandId: 4,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/321270/1.jpg`,
        price: 200.00
    },
    {
        name: `TEDDY SANTIS X 990V3 MADE IN USA 'RAW AMETHYST'`,
        brandId: 4,
        image: `https://cdn.flightclub.com/3000/TEMPLATE/322133/1.jpg`,
        price: 276.00
    }
];

const testBrands = [
    { name: `Air Jordan` },
    { name: `Adidas` },
    { name: `Nike` },
    { name: `New Balance` }
]

const testSizes = [
    {
        gender: `Men's`,
        size: 3.5
    },
    {
        gender: `Men's`,
        size: 4
    },
    {
        gender: `Men's`,
        size: 4.5
    },
    {
        gender: `Men's`,
        size: 5
    },
    {
        gender: `Men's`,
        size: 5.5
    },
    {
        gender: `Men's`,
        size: 6
    },
    {
        gender: `Men's`,
        size: 6.5
    },
    {
        gender: `Men's`,
        size: 7
    },
    {
        gender: `Men's`,
        size: 7.5
    },
    {
        gender: `Men's`,
        size: 8
    },
    {
        gender: `Men's`,
        size: 8.5
    },
    {
        gender: `Men's`,
        size: 9
    },
    {
        gender: `Men's`,
        size: 9.5
    },
    {
        gender: `Men's`,
        size: 10
    },
    {
        gender: `Men's`,
        size: 10.5
    },
    {
        gender: `Men's`,
        size: 11
    },
    {
        gender: `Men's`,
        size: 11.5
    },
    {
        gender: `Women's`,
        size: 5
    },
    {
        gender: `Women's`,
        size: 5.5
    },
    {
        gender: `Women's`,
        size: 6
    },
    {
        gender: `Women's`,
        size: 6.5
    },
    {
        gender: `Women's`,
        size: 7
    },
    {
        gender: `Women's`,
        size: 7.5
    },{
        gender: `Women's`,
        size: 8
    },
    {
        gender: `Women's`,
        size: 8.5
    },
    {
        gender: `Women's`,
        size: 9
    },
    {
        gender: `Women's`,
        size: 9.5
    },
    {
        gender: `Women's`,
        size: 10
    },
    {
        gender: `Women's`,
        size: 10.5
    },
    {
        gender: `Women's`,
        size: 11
    },
    {
        gender: `Women's`,
        size: 11.5
    },
]

const testInventory = [
    { 
        productId: 1,
        sizeId: 6,
        stock: 20
    },
    { 
        productId: 1,
        sizeId: 12,
        stock: 50
    },
    { 
        productId: 1,
        sizeId: 13,
        stock: 24
    },
    { 
        productId: 8,
        sizeId: 21,
        stock: 5
    },
    { 
        productId: 8,
        sizeId: 23,
        stock: 100
    },
    { 
        productId: 8,
        sizeId: 27,
        stock: 15
    },
    { 
        productId: 14,
        sizeId: 8,
        stock: 13
    },
    { 
        productId: 14,
        sizeId: 12,
        stock: 80
    },
    { 
        productId: 14,
        sizeId: 14,
        stock: 0
    },
    { 
        productId: 19,
        sizeId: 27,
        stock: 43
    }
]

export {
    testProducts,
    testBrands,
    testSizes,
    testInventory
}
