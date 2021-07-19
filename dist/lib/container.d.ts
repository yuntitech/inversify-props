import { Container as InversifyContainer, interfaces } from 'inversify';
import { IApi, IHostUtil } from '@yunti-private/rn-api';
import { IVisualEventTracking } from '@yunti-private/rn-visual-event-tracking';
import { Constructor, Id } from './inversify.types';
/**
 * This class is the wrapper of inversify Container to add more functionalities.
 * The library exports an instance of the class but you can create your own instance
 */
export declare class Container extends InversifyContainer {
    bindTo<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingInWhenOnSyntax<T>;
    addTransient<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingWhenOnSyntax<T>;
    addSingleton<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingWhenOnSyntax<T>;
    addRequest<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingWhenOnSyntax<T>;
    get<T>(serviceIdentifier: Id): T;
    getApi: () => IApi;
    getHostUtil: () => IHostUtil;
    getVisualEventTracking: () => IVisualEventTracking;
}
export declare function getContainer(): Container;
export declare function setContainer(options?: interfaces.ContainerOptions): Container;
export declare function resetContainer(): void;
