export declare function mockSingleton<T>(id: string | symbol, to: {
    new (...args: any[]): T;
}): void;
export declare function mockTransient<T>(id: string | symbol, to: {
    new (...args: any[]): T;
}): void;
export declare function mockRequest<T>(id: string | symbol, to: {
    new (...args: any[]): T;
}): void;
