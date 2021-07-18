export declare type Constructor<T = any> = {
    new (...args: any[]): T;
} | any;
export declare type Id = string | symbol;
export declare type IdsCache = {
    [key: string]: Id;
};
