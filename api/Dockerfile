FROM node:10.16.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "yarn", "server", "migrate" ]


# docker build -t <username>/learningnode .
# docker run -p 3000:3000 -d <username>/learningnode
# docker exec -it <containerid> /bin/bash
# docker run -it -p 5432:5432 postgres

#https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application