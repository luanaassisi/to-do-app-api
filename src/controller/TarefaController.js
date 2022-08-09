import Tarefa from "../model/Tarefa.js";
import { dbTarefa } from "../infra/db.js";


export const tarefaController = (app,db) => {
    app.get('/tarefa/', (req, resp)=>{
        db.all("SELECT * FROM TAREFAS",(error,rows) =>{
            if(error){
                console.log(error)
            }else{
                resp.json(rows)
            }
        })
    });

    app.post("/tarefa", (req, resp)=>{
        const {titulo, descricao, status, data, id_usuario} = req.body
        db.run(`INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS ,DATACRIACAO, ID_USUARIO)
                VALUES (?,?,?,?,?)`,titulo, descricao, status, data, id_usuario, (error)=>{
                    if(error){
                        console.log(error);
                    }else{
                        resp.send("Tarefa criado com sucesso");
                }
            }
        );
    });

    app.delete("/tarefa/:id", (req, res) => {
        const data = dbTarefa.filter((element) => element.id === req.params.id
        );
        res.send(data);
        Array.splice(2,1)
    });

    app.put('/tarefa/:id', (req, resp)=>{
        resp.send(req.params.id)
    });
};

