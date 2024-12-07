
FROM node:20-alpine3.19

RUN npm install -g npm@latest && npm i -g @nestjs/cli

WORKDIR /backend

COPY . .

CMD ["npm", "run", "start:dev"]

# api_serverコンテナの入り方
# docker exec -it backend sh