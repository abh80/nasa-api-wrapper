import apod from './functions/apod'
import MarsRoverImage from './functions/mrp'
import Earth from './functions/earth'
import Insight from './functions/insight'
import _techport from './functions/techport'
import _Nivl from './functions/nivl'
import _tle from './functions/tle'
export default class{
  key:string;
  apod:apod;
  MarsRoverImage:MarsRoverImage
  Earth:Earth
  Insight:Insight
  NIVL:_Nivl
  Techport:_techport
  Tle:_tle
constructor(key:string){
    if(!key)throw new Error('No Nasa Api key was provided')
    this.key =key
    this.apod = new apod(key)
    this.MarsRoverImage=new MarsRoverImage(key)
    this.Earth = new Earth(key)
    this.Insight=new Insight(key)
    this.NIVL=new _Nivl(key)
    this.Techport=new _techport(key)
    this.Tle = new _tle(key)
  }
}