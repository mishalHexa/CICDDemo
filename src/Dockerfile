# Use official Node.js image
FROM node:20-alpine AS runtime

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app (creates .next folder)
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start production server
CMD ["npm", "start"]
