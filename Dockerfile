# Step 1: Build the React app
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the React app with a static file server
FROM node:20

# Install a simple static server like serve
RUN npm install -g serve

WORKDIR /app
COPY --from=build /app/dist ./dist

# Serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]

