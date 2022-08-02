
export const usuarioController = (app) => {
    app.get("/usuario", (req, resp)=>{
        resp.send("Rota ativada com GET e recurso usuario")
    });

    app.post("/usuario", (req, resp)=>{
        resp.send("Rota ativada com Post e recurso usuario")
    });
};
