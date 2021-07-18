import { Constructor } from './inversify.types';
export declare function getParametersFromConstructor(constructor: Constructor): string[];
export declare function getParametersAsStringFromConstructor(constructor: Constructor): string;
export declare function convertStringParametersToList(stringParameters: string): string[];
export declare function cleanParameter(parameter: string): string;
