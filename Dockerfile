FROM node:9.1-alpine

LABEL maintainer="Marz <marz@borsen.dk>"

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# RUN addgroup -S node && adduser -S -g node node

# Bundle app source
COPY ./game /usr/src/app

RUN chown -R node:node /usr/src/app

# Use node user
USER node

RUN npm install
# Remove dev packages
RUN npm prune --production

CMD [ "npm", "run", "start" ]
