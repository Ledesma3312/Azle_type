import { Server } from 'azle';
import express, { Request } from 'express';

type Book ={
    id : number;
    title : string;
    autor : string;
}

let books : Book[] = [{
    id: 1, 
    title: "Harry Potter", 
    autor: "J.K. Rowling"
}];

export default Server(() => {
    const app = express();

    app.use(express.json());

   //GET
   app.get('/books', (req, res) => {
         res.json(books);
    });


   //POST
   app.post('/books', (req, res) => {
        books = [...books, req.body];
        res.send("Ok");
    });


    //PUT

    //DELETE




    return app.listen();
});
