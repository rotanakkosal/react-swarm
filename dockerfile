# Use an official Node.js runtime as a parent image
FROM node:20.5.0 AS nextjs-build

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies using NPM
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your React.JS application
RUN npm run build

# Run React.JS Project
CMD ["npm", "start"]
