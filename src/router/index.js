import { Router } from "express";
import { estudianteController } from "../controllers/estudiante.controller";

export const Route = Router();


Route.get('/',function(req, res){
    res.json({
        mensaje:"principal abisoft",
        error:false
    })
})



//producto
Route.get('/estudiante',estudianteController.listarEstudiante);
Route.get('/estudiante/:id',estudianteController.buscarEstudiante);
Route.post('/estudiante',estudianteController.crearEstudiante);

Route.put('/estudiante/:id',estudianteController.actualizarEstudiante);
Route.delete('/estudiante/:id',estudianteController.eliminarEstudiante);
