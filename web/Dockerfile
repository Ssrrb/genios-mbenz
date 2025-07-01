# Dockerfile for Next.js App

# 1. Build Stage: Install dependencies and build the application
# Use a specific Node.js version for consistency. Alpine is a lightweight version.
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies -- 'libc6-compat' is for compatibility with some native modules.
RUN apk add --no-cache libc6-compat

# Copy package files and install all dependencies.
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application source code.
COPY . .

# Disable Next.js telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# Provide a dummy DATABASE_URL at build time to allow the build to succeed.
# The actual secret will be injected by Cloud Run at runtime.
ENV DATABASE_URL="postgresql://dummy:dummy@dummy/dummy?sslmode=require"

# Build the Next.js application for production with 'standalone' output.
# Ensure `output: 'standalone'` is in your next.config.mjs file.
RUN npm run build

# 2. Runner Stage: Create the final, small, and secure production image
FROM node:20-alpine AS runner
WORKDIR /app

# Set the environment to production.
ENV NODE_ENV=production
# Disable Next.js telemetry for the running application.
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security purposes.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only the necessary standalone files from the build stage.
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
# Copy public assets.
COPY --from=build --chown=nextjs:nodejs /app/public ./public
# Copy static build assets.
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user.
USER nextjs

# Expose the port the app will run on.
# Cloud Run automatically uses the PORT environment variable.
EXPOSE 3000

# Set the PORT environment variable for Cloud Run.
ENV PORT 3000

# The command to start the application.
CMD ["node", "server.js"]