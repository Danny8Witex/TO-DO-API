import express from "express";
import {Request, Response } from "express"
const app = express ();
const PORT = 4000;
function getLIST(req : Request, res : Response){
    return res.send(
        "My TODO List"
    )
}
app.get("/", getLIST);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
