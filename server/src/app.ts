import express, { Request, Response, NextFunction } from 'express'; //
import { json } from 'body-parser';  // parse the body and extract to json data
import { getSum } from './controllers/numbersFunctions';
import path from "path";
const app = express();


app.use(express.static(path.join(__dirname, '../../client/build')));

app.use(json());

app.get('/sum', getSum);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../../client/build/index.html'));
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
});
app.listen(3000);
