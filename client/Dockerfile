# ==========================================
# OPTIMIZED PRODUCTION DOCKERFILE FOR CLIENT
# ==========================================

# --- Stage 1: Build Production Assets ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Copy client source code
COPY . .

# Build production bundle with Vite
RUN npm run build

# --- Stage 2: Serve with Lightweight Nginx ---
FROM nginx:alpine AS runner

# Remove default Nginx site configuration
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 6004

# Healthcheck to verify web server readiness
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:6004/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
