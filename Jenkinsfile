//Proceso para automatizar este proceso dentro del contenedor y así no hacerlo cada vez
pipeline{
    
    agent any
    stages{

        stage("Descargar el código de la aplicación"){
            steps{
                git "url"
            }
            
        }

        stage("Creación de imagen"){
            steps{
                bat "docker build -t ablasco/app1 ."
            }
            
        }

        stage("Ejecución de contenedor"){
            steps{
                bat "docker run -d --name app1 -p 8081:8080 ablasco/app1"

            }
        }

        stage("Probar test del servicio"){
            steps{
                echo "Probando el servicio..."
            }

        }

        stage("Cerrar recursos"){
            steps{
                bat "docker stop app1"
                bat "docker container rm app1"
                bat "docker image rm ablasco/app1"
            }

        }
    }




}