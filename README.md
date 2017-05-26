# youtube-api-upload

Node.js application built to upload videos directly to a youtube channel by using the Youtube API asynchronously.

## Getting Started

To create a google app in your [Google Console](https://console.developers.google.com/) and obtain the application credentials to handle the OAuth2 callback url *(download the .json file provided by the app)*.

Downloaded the file from OAuth2 -> Download JSON
Add your `client_secret.json` file to the `samples` directory:

```
├── samples
│   ├── client_secret.json <=
│   └── app.js
├── lib
│   └── index.js
└── package.json
```

Note: For development this app is using `http://localhost:5000/`

### Cloud Console

[Google Cloud Platform](https://console.cloud.google.com/?hl=zh-TW) API管理員/憑證/OAuth 2.0 用戶端 ID
> [網路應用程式 用戶端 ID]  
已授權的 JavaScript 來源  
`http://localhost:5000`  
已授權的重新導向 URI  
`http://localhost:5000/oauth2callback`

[Youtube /my_videos](https://www.youtube.com/my_videos)  

### Install Dependencies

To run this script you have to create OAuth2 credentials and download them
as JSON and replace the `credentials.json` file. Then install the dependencies:

`npm i googleapis express`

`npm i r-json lien opn bug-killer pretty-bytes`

### Initiate App
```
node app
```

### Simple Test App
```
npm test
```

Note
===

[npm-install](https://docs.npmjs.com/cli/install)  
`npm init` -> package.json  
`npm install googleapis express --save`  
`npm install r-json lien opn bug-killer pretty-bytes --save-dev`

[![NPM](https://nodei.co/npm/googleapis.png?downloads=true&stars=true)](https://www.npmjs.com/package/googleapis)  

[![NPM](https://nodei.co/npm/r-json.png?downloads=true&stars=true)](https://www.npmjs.com/package/r-json)  

[![NPM](https://nodei.co/npm/lien.png?downloads=true&stars=true)](https://www.npmjs.com/package/lien) 

[![NPM](https://nodei.co/npm/opn.png?downloads=true&stars=true)](https://www.npmjs.com/package/opn) 

[![NPM](https://nodei.co/npm/bug-killer.png?downloads=true&stars=true)](https://www.npmjs.com/package/bug-killer)

[![NPM](https://nodei.co/npm/pretty-bytes.png?downloads=true&stars=true)](https://www.npmjs.com/package/pretty-bytes)  

[![NPM](https://nodei.co/npm/express.png?downloads=true&stars=true)](https://www.npmjs.com/package/express)  

[![NPM](https://nodei.co/npm/socket.io.png?downloads=true&stars=true)](https://www.npmjs.com/package/socket.io)  

[![NPM](https://nodei.co/npm/cli-spinner.png?downloads=true&stars=true)](https://www.npmjs.com/package/cli-spinner)  

:memo: References
===
[YouTube Data API Overview](https://developers.google.com/youtube/v3/getting-started)    
[youtube-api](https://github.com/IonicaBizau/youtube-api)  
[Youtube-Uploader](https://github.com/aprietof/Youtube-Uploader)  
GoogleWebComponents/[google-youtube-upload](https://github.com/GoogleWebComponents/google-youtube-upload)     

### Google APIs

youtube/[api-samples](https://developers.google.com/youtube/v3/code_samples/javascript#authorizing_requests)  [upload_video](https://github.com/youtube/api-samples/tree/master/javascript)  
upload_video.html `data-clientid='<YOUR_CLIENTID>'`  
```
├── public
│   ├── cors_upload.js
│   ├── upload_video.js
│   ├── upload_video.css
│   └── upload_video.html
```

[Google APIs Node.js Client](https://github.com/google/google-api-nodejs-client)
YouTube Data API [Videos: insert](https://developers.google.com/youtube/v3/docs/videos/insert)  

### Framework 

[materialize](http://materializecss.com)  
[Materialize 教程](https://www.w3cschool.cn/materialize)  
materializecss dialogs [Toasts](http://materializecss.com/dialogs.html)