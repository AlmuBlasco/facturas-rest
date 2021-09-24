FROM node:16-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./
#Con ese comando copiamos todos los archivos que empiecen por package y terminen por .json   

RUN npm install

COPY index.js .

#Con esto indicamos el puerto en el que vamos a trabajar
EXPOSE 8080

CMD ["node", "index.js"] 
#CMD ["npm", "start"] 