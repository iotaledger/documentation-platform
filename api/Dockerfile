FROM node:10.13.0-alpine

# Working DIR
WORKDIR /usr/src/app

# Copy everything from current Folder
COPY . ./

# Running required steps to prepare the api prod build
RUN npm install
RUN npm run build

EXPOSE 4000:4000

# Serve the prod build from the dist folder
CMD ["npm" , "start"]