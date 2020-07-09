import axios from 'axios'
class Earth{
    key:string
    constructor(key){
        if(!key)throw new Error('No Nasa Api key was provided')
        this.key = key
    }
    async getImage(lat:string,lon:string,date:string){
        if(!lat)throw new Error('No latitude was provided')
        if(!lon)throw new Error('No longitude was provided')
        const {data:res}=await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=${this.key}`)
        return res.url
    }
    async getData(lat:string,lon:string,date:string){
        if(!lat)throw new Error('No latitude was provided')
        if(!lon)throw new Error('No longitude was provided')
        if(!date)throw new Error('No date was provided')
        const {data:res}=await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=${this.key}`)
        return res
    }
}
export default Earth