FROM node:20-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm ci

COPY . .
RUN npm run build

CMD ["npm","start"] 