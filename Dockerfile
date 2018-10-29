FROM node:8.12-alpine

# install git from Alpine packages
RUN apk add git

# Working DIR
WORKDIR /usr/src/app
RUN git clone https://github.com/iotaledger/mam.client.js
RUN git clone https://github.com/iotaledger/iota.js

# Copy everything from current Folder
COPY . ./

RUN mkdir docs/MAM
RUN mkdir docs/IOTA

# Copy MD files of MAM under current folder docs/IOTA
RUN cp -R iota.js/api_reference.md docs/IOTA/api_reference.md

# Copy MD files of MAM under current folder docs/MAM
RUN cp -R mam.client.js/docs/*.md docs/MAM/

# Removing the hole mam repo - not anymore needed
RUN rm -rf mam.client.js

# Removing the hole IOTA repo - not anymore needed
RUN rm -rf iota.js

# Running required steps to prepare the app as Alexey did
RUN npm install
RUN npm run index

# Change exposed port
#EXPOSE 8080/tcp
EXPOSE 3000
CMD ["npm","start"]


