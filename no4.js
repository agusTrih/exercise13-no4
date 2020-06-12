const firstArray = ["Math", "English", "Programming"];
const secondArray = ["Geography", "Spanish", "rogramming"];

const commonFruits = (firstArray, secondArray) => {
    return firstArray.some((valueArray) => secondArray.includes(valueArray));
};
console.log(commonFruits(firstArray, secondArray));
