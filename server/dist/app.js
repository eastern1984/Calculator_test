"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //
const body_parser_1 = require("body-parser"); // parse the body and extract to json data
const numbersFunctions_1 = require("./controllers/numbersFunctions");
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
app.use(body_parser_1.json());
app.get('/sum', numbersFunctions_1.getSum);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './../../client/build/index.html'));
});
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
