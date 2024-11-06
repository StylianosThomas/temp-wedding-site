# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the HTML file into the container
COPY . /app/

# Install a basic HTTP server
RUN npm install -g http-server

# Expose port 8090
EXPOSE 8090

# Command to start the HTTP server
CMD ["http-server", "-p", "8090"]
