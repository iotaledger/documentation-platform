FROM node:10.13.0-alpine

# Working DIR
WORKDIR /usr/src/app

# Copy everything from current Folder
COPY . ./

# Running required steps to prepare the app as Alexey did
RUN npm install
RUN npm run index

EXPOSE 3000:3000

CMD ["npm" , "start"]
