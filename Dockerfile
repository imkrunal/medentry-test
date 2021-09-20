FROM node:14-alpine 

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .

CMD ["yarn", "start"]

EXPOSE 3000