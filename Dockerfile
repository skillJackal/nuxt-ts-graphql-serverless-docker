FROM node

RUN mkdir -p /usr/src/project

WORKDIR /usr/src/project
COPY . /usr/src/project

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

ENV MY_ENV=docker

RUN yarn install
RUN yarn run fe:build
CMD [ "yarn", "run", "start:docker" ]