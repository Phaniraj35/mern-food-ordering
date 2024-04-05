FROM node:20-alpine as base

WORKDIR /src
COPY package.json /
COPY yarn.lock /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install -g ts-node && npm install
COPY . /
CMD ["nodemon", "-L", "src/index.ts"]