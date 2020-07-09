declare class NIVL {
    key: string;
    base: string;
    constructor(key: any);
    search(q: string): Promise<any>;
    asset(id: string): Promise<any>;
    metadata(id: string): Promise<any>;
    captions(id: string): Promise<any>;
}
export default NIVL;
