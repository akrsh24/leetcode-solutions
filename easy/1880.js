/**
 * 1880. Check if Word Equals Summation of Two Words
 */

const characterDictionary = {
    "a": "0",
    "b": "1",
    "c": "2",
    "d": "3",
    "e": "4",
    "f": "5",
    "g": "6",
    "h": "7",
    "i": "8",
    "j": "9"
};

const getCharacterValue = ({ character }) => {
    return characterDictionary[character];
}

const reducerFn = (accumulator, currentValue, currenIndex) => {
    let charValue = getCharacterValue({ character: currentValue });
    return currenIndex > 0 ? (accumulator + charValue) : (charValue);
}

//acb -> 021 ->21
const getStringValue = ({ str }) => {
    return [...str].reduce(reducerFn, "0");
}

var isSumEqual = function (firstWord, secondWord, targetWord) {
    let firstWordNumericalValue = getStringValue({ str: firstWord });
    let secondWordNumericalValue = getStringValue({ str: secondWord });
    let targetWordNumericalValue = getStringValue({ str: targetWord });

    return (parseInt(firstWordNumericalValue) + parseInt(secondWordNumericalValue) === parseInt(targetWordNumericalValue));
};

// console.log(isSumEqual("aaa", "a", "aab"));

//Optimised code

const getNumericalValue = ({ str }) => {
    let value = "";
    for (let i = 0; i < str.length; i++)
        value = value + getCharacterValue({ character: str[i] });
    return value;
}

var isSumEquals = function (firstWord, secondWord, targetWord) {
    return (parseInt(getNumericalValue({ str: firstWord })) + parseInt(getNumericalValue({ str: secondWord })) === parseInt(getNumericalValue({ str: targetWord })));
};

console.log(isSumEquals("acb", "cba", "cdb"));

