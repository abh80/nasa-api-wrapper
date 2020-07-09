import axios from 'axios'
class Techport{
    key:string
    constructor(key){
        this.key = key
    }
    async get(id:string){
        if(!id)throw new Error('No ID Parameter was provided')
        const {data:res} = await axios.get(`https://api.nasa.gov/techport/api/projects/${id}?api_key=${this.key}`)
        return res;
    }
}
export default Techport