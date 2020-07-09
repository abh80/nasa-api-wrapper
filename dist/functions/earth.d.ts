declare class Earth {
    key: string;
    constructor(key: any);
    getImage(lat: string, lon: string, date: string): Promise<any>;
    getData(lat: string, lon: string, date: string): Promise<any>;
}
export default Earth;
