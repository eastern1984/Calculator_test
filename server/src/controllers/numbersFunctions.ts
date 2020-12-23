import {RequestHandler} from "express";

interface SumInput {
    numberOne: string;
    numberTwo: string;
}

const checkNumber = (v: string): number => {
    const input = parseInt(v);
    if (!v) {
        return 0;
    }
    return input;
}

export const getSum: RequestHandler = async (req, res, next) => {
    const numberOne = checkNumber(req.query.numberOne as string);
    const numberTwo = checkNumber(req.query.numberTwo as string);

    return res.status(201).json({result: "OK", sum: numberOne + numberTwo});
};