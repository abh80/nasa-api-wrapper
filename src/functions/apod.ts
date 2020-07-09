import axios from 'axios'
class APOD{
  key:string
  constructor(key:string){
     if(!key)throw new Error('No Nasa Api key was provided')
    this.key =key
  }
  async getImage(){ //returns only image url
    const {data:res}=await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`)
    return res.url;
  }
  async getData(){//returns full data as an object
   const {data:res}=await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`)
   return res;
  }
}
export default APOD