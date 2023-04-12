class ValidarEstudiante{
    calcularEdad(fechaNacimiento){
        let hoy = new Date();
        let cumpleanos = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        let m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

      return edad;

    }
    validarMayorEdad(fechaNacimiento){
        let edad=this.calcularEdad(fechaNacimiento);
        let res=true;
        if(edad<18){
            res=false;
        }

      return res;

    }
    validarFechaInscipcion(fechaNacimiento,fechaInscripcion){
        let cumpleanos = new Date(fechaNacimiento);
        let incripcion = new Date(fechaInscripcion);
        let res=true;
        if(incripcion<cumpleanos){
            res=false;
        }
        return res;
    }

    validarCosto(fechaInscripcion,costo){
        let incripcion = new Date(fechaInscripcion);
        let hoy = new Date();
        let anios = hoy.getFullYear() - incripcion.getFullYear();
        console.log(anios);
        if(anios==0){
            anios=1;
        }
        let valor= anios*100;
        let res=true;
        if(costo!=valor){
            res=false;
        }

        return res;
    }
    validarNombre(nombreEstudiante){
        let nombres=  nombreEstudiante.split(' ');
        let res=true;
        if(nombres.length<2){
            res= false;
        }else{
            nombres.forEach((nombre, index) => {
                if(nombre.length<4){
                    res=false;
                }
            });
        }

        return res;
        
    }
}
export const validarEstudiante=new ValidarEstudiante;