import axios from 'axios'
class NIVL{
    key:string
    base:string
    constructor(key){
        this.key=key
         this.base='https://images-api.nasa.gov/'
    }
    async search(q:string){
        if(!q)throw new Error('No query was provided')
        const {data:res} = await axios.get(this.base+`search?q=${q}`)
        return res;
    }
    async asset(id:string){
        if(!id)throw new Error('No Nasa ID was provided')
        const {data:res} = await axios.get(this.base+`asset/${id}`)
        return res;
    }
    async metadata(id:string){
        if(!id)throw new Error('No Nasa ID was provided')
        const {data:res} = await axios.get(this.base+`metadata/${id}`)
        return res;
    }
    async captions(id:string){
        if(!id)throw new Error('No Nasa ID was provided')
        const {data:res} = await axios.get(this.base+`captions/${id}`)
        return res;
    }
}
export default NIVL