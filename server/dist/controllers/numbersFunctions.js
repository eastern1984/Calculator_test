"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSum = void 0;
const checkNumber = (v) => {
    const input = parseInt(v);
    if (!v) {
        return 0;
    }
    return input;
};
const getSum = async (req, res, next) => {
    const numberOne = checkNumber(req.query.numberOne);
    const numberTwo = checkNumber(req.query.numberTwo);
    return res.status(201).json({ result: "OK", sum: numberOne + numberTwo });
};
exports.getSum = getSum;
