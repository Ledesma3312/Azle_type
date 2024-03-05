import { Server, ic } from 'azle';
import express, { Request } from 'express';
/*
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
*/
type Club={
    id : number;
    titulo: string;
    descrip : string;

}
let club : Club[] = [{
    id: 1, 
    titulo: "", 
    descrip: ""
}];

type User={
    id : number;
    principal : string;
    nombre: string;
    descrip : string;

}

let user : User[] = [{
    id: 1,
    principal : "",
    nombre: "",
    descrip : ""
}];



export default Server(() => {
    const app = express();

    app.use(express.json());

    //GET
    app.get('/club', (req, res) => {
        res.json(club);
    });

    //POST
    app.post('/club', (req, res) => {
        club = [...club, req.body];
        res.send("Listo!");
    });

    //PUT
    app.put('/club/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const clubs = club.find((c) => c.id === id);
        if (!club){
            res.status(404).send("Club no encontrado");
            return;
        }
        const updateClub ={...club, ...req.body};
        club = club.map((c) => c.id === updateClub.id ? updateClub : c);
        res.send("Todo bien :)");
    });
    //DELETE
    app.delete("club/:id", (req, res) => {
        const id = parseInt(req.params.id);
        club = club.filter((c) => c.id !== id);
        res.send("Todo bien :)");
    });

    //Ahora para el usuario
    //GET
    app.get('/user', (req, res) => {
        res.json(user);
    });
    //POST
    app.post('/user', (req, res) => {
        user = [...user, req.body];
        res.send("Listo!");
    });
    //PUT
    app.put('/user/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const users = user.find((u) => u.id === id);
        if (!user){
            res.status(404).send("Usuario no encontrado");
            return;
        }
        const updateUser ={...user, ...req.body};
        user = user.map((u) => u.principal === updateUser.principal ? updateUser : u);
        res.send("Todo bien :)");
    });
    //DELETE
    app.delete("user/:id", (req, res) => {
        const id = parseInt(req.params.id);
        user = user.filter((u) => u.id !== id);
        res.send("Todo bien :)");
    });



    /*
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
    app.put('/books/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const book = books.find((b) => b.id === id);
        if (!book){
            res.status(404).send("Book not found");
            return;
        }
        const updateBook ={...book, ...req.body};
        books = books.map((b) => b.id === updateBook.id ? updateBook : b);
        res.send("Todo bien :)");
    });

    //DELETE
    app.delete("books/:id", (req, res) => {
        const id = parseInt(req.params.id);
        books = books.filter((b) => b.id !== id);
        res.send("Todo bien :)");

    });
    */


    return app.listen();
});
