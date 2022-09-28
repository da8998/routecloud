FROM node:latest

WORKDIR /backend

ENV PATH /backend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["node", "server.js"]