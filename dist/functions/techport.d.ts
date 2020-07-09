declare class Techport {
    key: string;
    constructor(key: any);
    get(id: string): Promise<any>;
}
export default Techport;
