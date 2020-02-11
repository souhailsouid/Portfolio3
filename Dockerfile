FROM node:alpine
WORKDIR '/firstApp'

COPY package.json .
RUN npm install 
COPY . .
CMD ["npm", "start"]
