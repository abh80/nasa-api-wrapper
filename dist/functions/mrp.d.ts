declare class MarsRoverImage {
    key: string;
    constructor(key: string);
    curiosity(sols: number, camera: string): Promise<any>;
    spirit(sols: number, camera: string): Promise<any>;
    opportunity(sols: number, camera: string): Promise<any>;
}
export default MarsRoverImage;
