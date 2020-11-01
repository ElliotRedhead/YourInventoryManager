
FROM node:10.16.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser --disabled-password app
COPY . .
RUN chown -R app:app /opt/app
USER app
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "start" ]


# docker build -t <username>/learningnode .
# docker run -p 3000:3000 -d <username>/learningnode
# docker exec -it <containerid> /bin/bash
# docker run -it -p 5432:5432 postgres

#https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application