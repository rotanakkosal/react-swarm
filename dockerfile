# Use an official Node.js runtime as a parent image
FROM node:20.5.0 AS nextjs-build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.lock ./

# Install dependencies using Yarn
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js application
RUN npm run build

# Run NextJS Projectr
CMD ["npm", "start"]
