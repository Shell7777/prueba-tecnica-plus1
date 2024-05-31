FROM node:16-alpine3.11 AS angular
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 

FROM httpd:alpine3.15
WORKDIR /usr/local/apache2/httdocs/
COPY --from=angular /app/dist/prueba-tecnica-plus1 . 



