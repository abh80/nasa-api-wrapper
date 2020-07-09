import axios from 'axios'
class Tle{
    key:string
    constructor(key){
        if(!key)console.log('WARN:NO Key was provided this will affect other functions')
        this.key=key
    }
    async search(q:string){
        if(!q)throw new Error('No Search query was provided')
        const {data:res} = await axios.get(`https://data.ivanstanojevic.me/api/tle?search=${q}`)
        return res;
    }
    async get(q:string){
        if(!q)throw new Error('No ID was provided')
        const {data:res} = await axios.get(`http://data.ivanstanojevic.me/api/tle/${q}`)
        return res
    }
}
export default Tle