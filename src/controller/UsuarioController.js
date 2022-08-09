import { dbUsuario } from "../infra/db.js";

export const usuarioController = (app) => {
    app.get("/usuario/:id", (req, resp)=>{
        const data = dbUsuario.filter((element) => element.id === req.params.id
        );
        resp.send(data);
    });

    app.post("/usuario", (req, resp)=>{
        resp.send("Rota ativada com Post e recurso usuario")
    });
};
