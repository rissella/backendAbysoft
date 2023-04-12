import app from './app';

async function main(){    
  
    const PORT= process.env.PORT || 4000
    // 4. LEVANTAR el servidor
    await app.listen(PORT,()=>{
        console.log("Servidor levantado en http:127.0.0.1:"+PORT)
        
       
    })
    
}

main()