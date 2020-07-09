declare class Tle {
    key: string;
    constructor(key: any);
    search(q: string): Promise<any>;
    get(q: string): Promise<any>;
}
export default Tle;
