FROM node:14.16.1-alpine3.13 AS JS_BUILD
COPY frontend /frontend
WORKDIR frontend
RUN yarn && yarn build

FROM golang:1.16.3-alpine3.13 AS GO_BUILD
RUN apk update && apk add build-base
COPY server /server
WORKDIR /server
RUN go build -o /go/bin/server

FROM alpine:3.13.5
COPY --from=JS_BUILD /frontend/build* ./frontend/
COPY --from=GO_BUILD /go/bin/server ./
CMD ./server
