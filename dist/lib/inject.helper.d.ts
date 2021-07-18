import { Constructor, Id } from './inversify.types';
export declare function injectable(): (constructor: Constructor) => any;
export declare function inject(customId?: Id, debug?: boolean): (target: any, methodName: string, indexOrDescriptor?: number | PropertyDescriptor) => void;
export declare const Inject: typeof inject;
export declare function isParameterDecorator(index: number): boolean;
