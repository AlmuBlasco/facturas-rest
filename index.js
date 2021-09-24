const express = require("express");         //Estos comandos se ponen para poder usar la librería que hemos instalado previamente ASÍ
const cors = require("cors");
const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;      //Elemento necesario para interaccionar con una base de datos

const app = express();

app.use(cors());
app.use(express.json());        //Esto se pone para que sea capaz de utilizar el formato json

const port = 8080;
const connectionString = "mongodb+srv://admin:admin@clustercurso.qe4lm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoClient.connect(connectionString, { useUnifiedTopology: true })         //Con esto se conecta a la base de datos y se accende mediante la cadena de conexión
    .then(client => {                                                       //esta función se llama PROMESA

        // Todo el codigo de acceso a bases de datos
        console.log("Conectado a base de datos");

        const facturas = client.db("myFirstDatabase").collection('facturas');
        //Gestión de facturas

        //Crear facturas
        app.post("/facturas", function (req, res) {

            let factura = req.body;                      //Pido la info que está almacenada en la base de datos para devolverla como respuesta

            //llamar al servicio que inserta la factura en base de datos
            facturas.insertOne(factura).then(result => {
                console.log(result);

            }).catch(error => {
                console.error(err);

            });
            response.send("ok");
        
        });

        // Recuperar facturas
        app.get("/facturas/:facturaId", (request, response) => {

            let facturaId = request.params.facturaId;           //facturaId es una cadena y es lo que estoy recuperando

            let o_id = new mongo.ObjectId(facturaId);           //Se tiene que definir que el Id es un objectId porque es una cadena de caracteres
            let query = { _id: o_id };

            // recuperar la factura de la base de datos
            facturas.findOne(query).then(factura => {
                response.json(factura);
            }).catch(err => {
                console.error(err);
            });
        });


        //Actualizar factura por ID
        app.put("/facturas/:facturaId", (req, res) => {

            let facturaId = req.params.facturaId;

            //Aquí va la lógica de la aplicación (CONECTAR CON LA BASE DE DATOS)

            res.json();

        });

        //Borrar factura por ID
        app.delete("/facturas/:facturaId", (req, res) => {

            let facturaId = req.params.facturaId;

            //Aquí va la lógica de la aplicación

            res.json();

        });



        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)

        });

    }).catch(error => console.error(error));


