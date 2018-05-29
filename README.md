# Introduction

This is a demo of github webhook by [node.js](https://nodejs.org).

You can use it for:

1. Automatic update repository on your server.
2. Automatic build.
3. Repository change record.

# Features

1. Securing your program from attacks, [read more](https://developer.github.com/webhooks/securing).

# How to use?

## Install

```bash
$ git clone https://github.com/qiutuleng/webhook-demo.git
$ cd webhook-demo
$ yarn install # or using npm: npm install
```

## Configure

1. Creating Webhooks, You can check out the [official documents](https://developer.github.com/webhooks/creating/).
2. Run this project
    ```bash
    $ node index.js
    ```
3. Enter the url in the Payload URL of the webhook configuration page. the url like this `http://your-domain.com:3000/webhook`

**NOTE:** If you run this project in localhost, you can use [ngrok](https://nogrk.com) To forward the request 
