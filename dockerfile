FROM node:10-alpine

# create app dir
WORKDIR /home/node/app

# install app dependencies
# a wildcard is used to ensure both package and lock are copied
COPY package*.json ./

RUN npm install

# bundle the app source
COPY . .

EXPOSE 8080
CMD ["node", "app.js"]

