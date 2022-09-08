FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
ENV REACT_APP_AIRTABLE_API_KEY="Your airtable api key"
EXPOSE 3000
RUN npm i
CMD ["npm", "run", "start"]