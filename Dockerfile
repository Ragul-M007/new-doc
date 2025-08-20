# # ----------------------------
# # Production Dockerfile
# # ----------------------------
# FROM node:24-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy rest of the source code
# COPY . .

# # Build the React (Vite) app
# RUN npm run build

# # ----------------------------
# # Serve with lightweight web server
# # ----------------------------
# FROM nginx:alpine

# # Copy build output to nginx html folder
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port 80 (Render uses this automatically)
# EXPOSE 80

# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
