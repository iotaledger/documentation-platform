FROM node:8.12-alpine

# install git from Alpine packages
RUN apk add git

# Working DIR
WORKDIR /usr/src/app
RUN git clone https://github.com/iotaledger/mam.client.js

# Copy everything from current Folder
COPY . ./

RUN mkdir docs/MAM

# Copy MD files of MAM under current folder docs/MAM
RUN cp -R mam.client.js/docs/*.md docs/MAM/

# Removing the hole mam repo - not anymore needed
RUN rm -rf mam.client.js

# Running required steps to prepare the app as Alexey did
RUN npm install
RUN npm run index

# Change exposed port
#EXPOSE 8080/tcp
EXPOSE 3000:3000
CMD ["npm","start"]


