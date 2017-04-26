# Based on the Ubuntu 14.04
FROM node:7.9.0
LABEL maintainer="camerondubas@gmail.com"

# Set environment variables for Node
#ENV NODE_ENV production

# Make directory for the app
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy the app code
COPY . /usr/src/app/
RUN npm set progress=false && npm install

# Start the server
CMD ["npm", "run", "start"]

EXPOSE 3000