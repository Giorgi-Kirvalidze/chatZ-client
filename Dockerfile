
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli@14.2.5
COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]
