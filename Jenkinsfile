//Proceso para automatizar este proceso dentro del contenedor y así no hacerlo cada vez
pipeline{
    
    agent any
    stages{

        stage("Descargar el código de la aplicación"){
            steps{
                git "https://github.com/AlmuBlasco/facturas-rest.git"
            }
            
        }

        stage("Creación de imagen"){
            steps{
                bat "docker build -t ablasco/facturas-node-16 ."
            }
            
        }

        stage("Ejecución de contenedor"){
            steps{
                bat "docker run -d --name app-facturas-node -p 8081:8080 ablasco/facturas-node-16"

            }
        }

        stage("Probar test del servicio"){
            steps{
                echo "Probando el servicio..."
            }

        }

        stage("Cerrar recursos"){
            steps{
                bat "docker stop app-facturas-node"
                bat "docker container rm app-facturas-node"
                bat "docker image rm ablasco/facturas-node-16"
            }

        }
    }




}