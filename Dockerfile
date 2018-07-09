FROM node:8.9.4
COPY . /target/app

WORKDIR /target/app
RUN npm install npm@latest -g
RUN npm install node-sass@latest
RUN npm install -g ionic
RUN npm install && npm cache verify


CMD ionic serve -all
EXPOSE 8100:8100
