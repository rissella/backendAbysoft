#  BACK END NODE JS - EXPRESS - SEQUELICE - SEQUELICECLI
## I. Pasos para arrancar el proyecto Node.js

## 1. Instalar las dependencias de Node
````
npm install
````
## 2. levantar el servidor para desarrollo
```
npm run dev
```
## 3. Empaquetar el codigo para produccion
```
npm run build
```
## 4. Levantar el servidor para produccion
```
npm run start
```
## II. Pasos para configurar la base de datos
## actualmente el proyecto esta configurado para postgres si se desea cambiar de DBMS instalar
```
# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database

```
## actualizar el username, password, database, host, dialect
````
src/config/db.json  actualizar 
    "username": "postgres",
    "password": "123456",
    "database": "bd_prueba", //nombre de la base de datos
    "host": "127.0.0.1",
    "dialect": "postgres"
````

## ejecutar sequelize cli
``
 npx sequelize-cli db:migrate
``
