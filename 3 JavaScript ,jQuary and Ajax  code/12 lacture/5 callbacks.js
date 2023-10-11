const data = [{ l: 10, b: 15 }, { l: 5, b: 8 }, { l: 4, b: 4 }];

const area = (l, b) => l * b;
const perimeter = (l, b) => 2 * (l + b);

// console.log(area(4, 4));
// console.log(perimeter(4, 4));

function calculate(data, logic) {
    const result = [];
    for (let x of data) {
        let ans = logic(x.l, x.b);
        result.push(ans);
    }
    return result;
}

const areaRes = calculate(data, area);
const perimeterRes = calculate(data, perimeter);
console.log(areaRes);
console.log(perimeterRes);