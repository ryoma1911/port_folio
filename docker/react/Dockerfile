# docker/react/Dockerfile
FROM node:18

WORKDIR /app

# frontend ディレクトリ内の package.json を想定
COPY ./port_folio/package*.json ./
RUN npm install

COPY ./port_folio .

EXPOSE 5173
CMD ["npm", "run", "dev"]
