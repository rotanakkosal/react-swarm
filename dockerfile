# Use an official Node.js runtime as a parent image
FROM node:20.5.0 AS nextjs-build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js application
RUN yarn run build

# Run NextJS Projectr
CMD ["yarn", "start"]
