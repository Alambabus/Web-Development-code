const product = [{
        id: 1,
        name: 'iphone',
        price: 100,
        description: 'this is random text'
    },
    {
        id: 2,
        name: 'TV',
        price: 200,
        description: 'this is random text'
    },
    {
        id: 3,
        name: 'Laptop',
        price: 150,
        description: 'this is random text'
    },

    {
        fun: function hacked() {
            console.log('You are Hacked!!')
        }
    }
];
// console.log(product);


const stringProduct = JSON.stringify(product); // JSON.stringify() method is used to convert a JavaScript object or value into a JSON string
// console.log(stringProduct);

const parseProduct = JSON.parse(stringProduct); //the JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object
console.log(parseProduct);
console.log(parseProduct[0].price);

stringProduct[0].price;