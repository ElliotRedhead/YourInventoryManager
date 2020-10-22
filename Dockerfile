FROM node:10

WORKDIR /usr/src/learningnode
COPY package*.json ./
COPY yarn.lock ./

RUN ["yarn", "install"]

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]

# docker build -t <username>/learningnode .
# docker run -p 3000:3000 -d <username>/learningnode
