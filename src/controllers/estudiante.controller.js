import models from "./../models";
import {response} from "express"; 
import { validarEstudiante } from "../shared/validarEstudiante";

class EstudianteController{
    async listarEstudiante(req,res = response){
        try {
    
            const datosEstudiante= await models.estudiante.findAll(
                {
                    attributes: {exclude: ['createdAt','updatedAt']},
                    order:['nombre'],
                    where: { estado: true }
                }
            );    

             res.status(200).send(datosEstudiante)

        } catch (error) {          
            res.status(500).json({
                status:500,
                mensaje:error.message
            })
            
        }
    }
    async buscarEstudiante(req,res = response){
        try {
            
            const datosEstudiante= await models.estudiante.findOne(
                {
                    attributes: {exclude: ['createdAt','updatedAt']},
                    order:['nombre'],
                    where: { estado: true, id:req.params.id}
                }
            );  
        if(datosEstudiante){
            res.status(200).send(datosEstudiante) 
        }else{
            res.status(422).json({
                status:422,
                mensaje:"El sistema no puede completar el Registro: no existe el Estudiante seleccionado",
                error:true
            })
        }

             

        } catch (error) {          
            res.status(500).json({
                status:500,
                mensaje:error.message,
                error:true
            })
            
        }
    }
    async crearEstudiante(req,res = response){
        try {    
            let  registro=validarEstudiante.validarFechaInscipcion(req.body.fechaNacimiento,req.body.fechaInscripcion);
            if(registro){
                let mayorEdad=validarEstudiante.validarMayorEdad(req.body.fechaNacimiento);
                if(mayorEdad){
                    let  edad=validarEstudiante.calcularEdad(req.body.fechaNacimiento);
                    if(edad==req.body.edad){
                        let costo=validarEstudiante.validarCosto(req.body.fechaInscripcion,req.body.costo);
                       if(costo){
                            let vernombre=validarEstudiante.validarNombre(req.body.nombre);
                            if(vernombre){
                                const estudiante= await models.estudiante.create({
                                    nombre:req.body.nombre,
                                    edad:req.body.edad,
                                    fechaNacimiento:req.body.fechaNacimiento,
                                    fechaInscripcion:req.body.fechaInscripcion,
                                    costo:req.body.costo
                                })
                                                                                        
                                res.status(200).json({
                                    status:200,
                                    mensaje:"Datos Registrados Exitosamente",
                                    error:false
                                })
                            }else{
                                res.status(422).json({
                                    status:422,
                                    mensaje:"El sistema no puede completar el Actualizacion: el nombre debe tener al menos dos palabras y cada una de 4 caracteres",
                                    error:true
                                })
                            }
                       }else{
                            res.status(422).json({
                                status:422,
                                mensaje:"El sistema no puede completar el Actualizacion: verificar el costo",
                                error:true
                            })
                       }

                    }
                    else{
                        res.status(422).json({
                            status:422,
                            mensaje:"El sistema no puede completar el Actualizacion: la edad no corresponde al ano de nacimiento",
                            error:true
                        })
                    }
                    
                }else{
                    res.status(422).json({
                        status:422,
                        mensaje:"El sistema no puede completar el Actualizacion: el estudiante debe ser mayor de edad",
                        error:true
                    })
                }
                
            }   else{
                res.status(422).json({
                    status:422,
                    mensaje:"El sistema no puede completar el Actualizacion: la fecha de registro no debe ser menor a la fecha de nacimiento",
                    error:true
                })
            }
                              
                              

        } catch (error) {
        // if(error.type)
            res.status(500).json({
                status:500,
                mensaje:error.message,
                error:true
            })
        
        }  
    }

    async actualizarEstudiante(req,res = response){
        try {
               
           let idestudiante=parseInt(req.params.id);
            const existe= await models.estudiante.findOne(
                {  where: { id: idestudiante }     }
            )
            if(existe){ 
                if(registro){
                    let mayorEdad=validarEstudiante.validarMayorEdad(req.body.fechaNacimiento);
                     if(mayorEdad){
                        let  edad=validarEstudiante.calcularEdad(req.body.fechaNacimiento);
                        if(edad==req.body.edad){
                            let costo=validarEstudiante.validarCosto(req.body.fechaInscripcion,req.body.costo);
                                if(costo){
                                    let vernombre=validarEstudiante.validarNombre(req.body.nombre);
                                    if(vernombre){
                                            const gestion= await models.estudiante.update({
                                                    nombre:req.body.nombre,
                                                    edad:edad,
                                                    fechaNacimiento:req.body.fechaNacimiento,
                                                    fechaInscripcion:req.body.fechaInscripcion,
                                                    costo:req.body.costo
                                                }, {
                                                    where: { estado: true,id: idestudiante }
                                                })
                                                                                                        
                                                res.status(200).json({
                                                    status:200,
                                                    mensaje:"Datos Actualizados Exitosamente",
                                                    error:false
                                                })  
                                        }else{
                                            res.status(422).json({
                                                status:422,
                                                mensaje:"El sistema no puede completar el Actualizacion: el nombre debe tener al menos dos palabras y cada una de 4 caracteres",
                                                error:true
                                            })
                                        }
                                    }else{
                                            res.status(422).json({
                                                status:422,
                                                mensaje:"El sistema no puede completar el Actualizacion: verificar el costo",
                                                error:true
                                            })
                                    }
        
                            }
                            else{
                                res.status(422).json({
                                    status:422,
                                    mensaje:"El sistema no puede completar el Actualizacion: la edad no corresponde al ano de nacimiento",
                                    error:true
                                })
                            }
                            
                        }else{
                            res.status(422).json({
                                status:422,
                                mensaje:"El sistema no puede completar el Actualizacion: el estudiante debe ser mayor de edad",
                                error:true
                            })
                        }
                        
                    }   else{
                        res.status(422).json({
                            status:422,
                            mensaje:"El sistema no puede completar el Actualizacion: la fecha de registro no debe ser menor a la fecha de nacimiento",
                            error:true
                        })
                    }                
            }else{
                res.status(422).json({
                    status:422,
                    mensaje:"El sistema no puede completar el Actualizacion: No se encuentra registro del estudiante",
                    error:true
                })
            }                   

        } catch (error) {
        // if(error.type)
            res.status(500).json({
                status:500,
                mensaje:error.message,
                error:true
            })
        
        }  
    }

    async eliminarEstudiante(req,res = response){
        try {
              
           let idestudiante=parseInt(req.params.id);
            const existe= await models.estudiante.findOne(
                {  where: { id: idestudiante }     }
            )
            if(existe){ 
                    const estudiante= await models.estudiante.update({
                        estado:false
                    }, {
                        where: { estado: true,id: idestudiante }
                    })
                                                                            
                    res.status(200).json({
                        status:200,
                        mensaje:"Datos Eliminados Exitosamente",
                        error:false
                    })                  
            }else{
                res.status(422).json({
                    status:422,
                    mensaje:"El sistema no puede completar la Eliminacion: No se encuentra registro el estudiante",
                    error:true
                })
            }                   

        } catch (error) {
        // if(error.type)
            res.status(500).json({
                status:500,
                mensaje:error.message,
                error:true
            })
        
        }  
    }


}
 export const estudianteController=new EstudianteController;