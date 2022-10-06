FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
CMD ["node", "app.js"]

# docker build . -t inscription_ms
# docker run --name inscription_ms -p 1337:1337 -d inscription_ms

# DATABASE
# docker run -d -p 3305:3306 --name inscription-db -e MYSQL_ROOT_PASSWORD=securepassword mysql
# docker exec -it inscription-db mysql -p