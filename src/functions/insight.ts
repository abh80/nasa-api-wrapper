import axios from 'axios'
class Insight{
  key:string
 constructor(key){
   if(!key)throw new Error('No Nasa Api key was provided')
   this.key = key
 }
  async get(){
  const {data:res}=await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${this.key}&feedtype=json&ver=1.0`)
  return res;
  }
}
export default Insight