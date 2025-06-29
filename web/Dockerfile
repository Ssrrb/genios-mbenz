# Dockerfile for Next.js App

# 1. Dependencies Stage: Install dependencies
# Use a specific Node.js version for consistency. Alpine is a lightweight version.
FROM node:20-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and the lockfile.
COPY package.json package-lock.json* ./
# Install all dependencies, including devDependencies needed for the build.
RUN npm install

# 2. Builder Stage: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
# Copy dependencies from the 'deps' stage.
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application source code.
COPY . .

# Disable Next.js telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application.
# The 'standalone' output mode (set in next.config.ts) creates a minimal server.
RUN npm run build

# 3. Runner Stage: Create the final, small production image
FROM node:20-alpine AS runner
WORKDIR /app

# Set the environment to production.
ENV NODE_ENV=production
# Disable Next.js telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for better security.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output from the builder stage.
# This includes the server and all necessary files.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copy the public folder for static assets.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# Copy the static assets from the .next/static folder.
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user.
USER nextjs

# Expose the port the app will run on. Cloud Run will automatically use this.
EXPOSE 3000

# Set the PORT environment variable.
ENV PORT 3000

# The command to start the application.
# The server.js file is part of the 'standalone' output.
CMD ["node", "server.js"]
