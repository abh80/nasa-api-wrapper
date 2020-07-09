declare class APOD {
    key: string;
    constructor(key: string);
    getImage(): Promise<any>;
    getData(): Promise<any>;
}
export default APOD;
