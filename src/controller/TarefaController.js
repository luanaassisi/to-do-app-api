import Tarefa from "../model/Tarefa.js";
import { bdTarefa } from "../infra/bd.js";

export const tarefaController = (app) => {
    app.get("/tarefa", (req, resp)=>{
        resp.send("Rota ativada com GET e recurso tarefa")
    });

    app.post("/tarefa", (req, resp)=>{
        const body = req.body
        const data = new Tarefa(...Object.values(body))
        bdTarefa.push(data)
        resp.json({
            msg: "Tarefa inserida com sucesso!",
            tarefa: data, 
            erro: false
        });
    });
};

