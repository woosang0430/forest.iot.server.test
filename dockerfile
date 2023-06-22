## build stage
FROM node:16-alpine as builder

WORKDIR /app
COPY . .
RUN npm install

ENTRYPOINT ["npm", "run", "start"]


