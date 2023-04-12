import models from "./../models";

class AuthController{

    async login(req,res){ 
          console.log(req.body)
          const {email,password}=req.body
               
          let user = await models.User.findOne({
               where:{
                    email:email
               } 
          })
     
          if(!user){
               return res.status(404).send({
                    mensaje:"El correo es incorrecto",
                    error:true
               })

          }
          return res.status(200).send({
               mensaje:"Contasena Correcta",
               error:false
          })
    } 

    async register(req,res){
     let user = await models.User.findOne({
         where:{
             email:req.body.email
         }            
     })

     if(!user){
        // req.body.password=await bcrypt.hash(req.body.password,12);
         models.User.create(req.body);
         res.status(200).send({mensaje:"Usuario Registrado"});

     }else{
         res.status(200).send({mensaje:"El correo ya esta registrado"});
     }

 }
    
 }

export const authController = new AuthController