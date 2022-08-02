import express from 'express';

const app = express();

app.use(express.json());

import { tarefaController } from "./controller/TarefaController.js";
import { usuarioController } from "./controller/UsuarioController.js";


tarefaController(app);
usuarioController(app);

app.listen(4000, () => {
    console.log("app Listen: http//localhost:4000");
});