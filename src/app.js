
import express,{json} from "express";
import cors from "cors"
import morgan from 'morgan';


import { Route } from "./router"


let app=express()

app.use(cors())

//carga de archivos estaticos
app.use(express.static('public'))


app.use(morgan('dev'))

app.use(json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1',Route)


export default app