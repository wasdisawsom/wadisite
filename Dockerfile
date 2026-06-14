FROM node:24

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=31415

EXPOSE 31415

CMD ["npm", "run", "start"]