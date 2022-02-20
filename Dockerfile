FROM node:14.15.1-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install

COPY . .