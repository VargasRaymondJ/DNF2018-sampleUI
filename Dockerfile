FROM node:8.11 as BUILD_IMAGE
ADD . /ui/ 
WORKDIR /ui/
RUN npm install
EXPOSE 8080
CMD npm run dev