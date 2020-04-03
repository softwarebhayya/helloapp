# Helloapp
Simple Node Js hello world app that can run in docker

## Instructions to run the app in docker

To build the image, open a terminal in the code directory

```
/helloapp> docker build -t helloapp .
```

To start a container
```
/helloapp> docker run -it -p 8080:8080 helloapp
```
