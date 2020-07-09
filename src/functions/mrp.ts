import axios from 'axios'
class MarsRoverImage{
  key:string
constructor(key:string){
   if(!key)throw new Error('No Nasa Api key was provided')
  this.key = key
}
async curiosity(sols:number,camera:string){
  if(!sols)sols = Math.floor(Math.random()*2000)
  if(!camera)camera = 'fhaz'
  const {data:res}=await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sols}&camera=${camera}&api_key=${this.key}`)
  return res;
   }
async spirit(sols:number,camera:string){
  if(!sols)sols = Math.floor(Math.random()*2000)
  if(!camera)camera = 'fhaz'
  const {data:res}=await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sols}&camera=${camera}&api_key=${this.key}`)
  if(res.photos.length ===0)throw new Error('No image found for selected sol');
  return res;
  }
  async opportunity(sols:number,camera:string){
    if(!sols)sols = Math.floor(Math.random()*2000)
    if(!camera)camera = 'fhaz'
    const {data:res}=await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sols}&camera=${camera}&api_key=${this.key}`)
    if(res.photos.length ===0)throw new Error('No image found for selected sol');
    return res;
    }

}
export default MarsRoverImage