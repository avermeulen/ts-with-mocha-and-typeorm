import express from 'express';

export default function UserRoutes() {

    async function list(req : express.Request, res : express.Response){
        res.json({
            data : [
                {
                    name : "Andre"
                },
                {
                    name : "Siya"
                }
            ]
        });
    }

    return {
        list
    }
}