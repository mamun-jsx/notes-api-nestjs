# Use the official Node.js 18 (or newer) Alpine image for a lightweight base image
FROM node:22-alpine AS builder

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json and lock file first to leverage Docker layer caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally and install all dependencies (including devDependencies needed for build)
RUN npm install -g pnpm@9 && pnpm install --frozen-lockfile

# Copy the rest of the application files to the working directory
COPY . .

# Generate Prisma client (if applicable) and build the NestJS application
RUN pnpm prisma generate
RUN pnpm run build

# Start a new, smaller image for the production environment
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Install pnpm globally in the production image
RUN npm install -g pnpm@9

# Copy only the necessary files for production from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "run", "start:prod"]
