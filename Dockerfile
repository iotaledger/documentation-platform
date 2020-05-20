FROM node:10.13.0-alpine
RUN apk --no-cache add git

# Working DIR
WORKDIR /usr/src/app

# Copy everything from current Folder
COPY . ./

# Set the env variables
ARG CONFIG_ID
RUN echo "CONFIG_ID=$CONFIG_ID"
# This following are used by the buildSearchIndex to upload the index
ARG SEARCH_ENDPOINT
RUN echo "SEARCH_ENDPOINT=$SEARCH_ENDPOINT"
ARG SEARCH_CORE
RUN echo "SEARCH_CORE=$SEARCH_CORE"
ARG SEARCH_AUTHORIZATION
RUN echo "SEARCH_AUTHORIZATION=$SEARCH_AUTHORIZATION"

# Running required steps to prepare the app prod build
RUN npm install
RUN npm run build

RUN rm -rf node_modules
RUN rm -rf src
RUN rm -rf docs
RUN rm -rf public
RUN rm package.json
RUN npm install serve
RUN apk del git

EXPOSE 3000

# Serve the prod build from the dist folder
CMD ["./node_modules/.bin/serve", "dist", "-p", "3000"]
