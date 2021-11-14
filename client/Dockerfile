
FROM node:10.16.0-alpine
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3000
CMD [ "yarn", "start" ]