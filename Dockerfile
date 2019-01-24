FROM node:10.13.0-alpine
RUN apk --no-cache add git

# Working DIR
WORKDIR /usr/src/app

# Copy everything from current Folder
COPY . ./

# Running required steps to prepare the app prod build
RUN npm install
RUN npm run build

EXPOSE 3000:3000

# Serve the prod build from the dist folder
CMD ["npm", "run", "serve"]