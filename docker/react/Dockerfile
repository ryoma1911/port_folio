# docker/react/Dockerfile
FROM node:18

WORKDIR /app

# frontend ディレクトリ内の package.json を想定
COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend .

EXPOSE 5173
CMD ["npm", "run", "dev"]
