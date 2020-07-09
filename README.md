# nasa-api-wrapper
A complete node js nasa api wrapper written in Typescript.
# Installation
```bash 
npm i nasa-api-wrapper
```
# Documentation
- Before Doing anything using this library please read the official nasa API documentation here -https://api.nasa.gov/
# Getting Started
- First get a token from https://api.nasa.gov/
- Javascript
```js
const client = require('nasa-api-wrapper')
const nasa = new client.Client('nasa-api-token-here')
```
- Typescript
```ts
import client from 'nasa-api-wrapper'
const nasa = new client.Client('nasa-api-token-here')
```
# Example
```js
//using the apod class
await nasa.apod.getImage() //returns image url
```
# Functions And Classes
All the functions returns json object.
Here are the list of functions 
|Class |Functions|Arguments|Description|
|:--|:--|:--|:--|
|apod|getImage()|none|Returns Image URL|
|apod|getData()|none|Returns Complete data|
|Earth|getImage()|none|Returns Image URL|
|Earth|getData()|none|Returns Complete Data|
|MarsRoverImage|spirit(sols,camera)|**sols** = solar days(ex:500) ,**camera**= Name of the camera(ex:fhaz)  |Returns Data for the spirit rover|
|MarsRoverImage|curiosity(sols,camera)|**sols** = solar days(ex:1000) ,**camera**= Name of the camera(ex:fhaz)  |Returns Data for the curiosity rover|
|MarsRoverImage|opportunity(sols,camera)|**sols** = solar days(ex:1000) ,**camera**= Name of the camera(ex:fhaz)  |Returns Data for the opportunity rover|
|Techport|get(id)|**id**|NASA's resource for collecting and sharing information about NASA-funded technology development|
|Tle|search(q)|**query**|Performing a search by satellite name|
|Tle|get(id)|**id**|Retrieving a single TLE record where query is satellite number|
|Insight|get()|None|Gives the current weather|
|NIVL aka Nasa Image and Video Library|search(q)|**query**|Performing a search|
|NIVL|asset(id)|**id**|Retrieving a media asset’s manifest|
|NIVL|metadata(id)|**id**|Retrieving a media asset’s metadata location|
|NIVL|captions(id)|**id**|Retrieving a video asset’s captions location|