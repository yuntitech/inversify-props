import { Container as InversifyContainer, decorate, interfaces } from 'inversify';
import { apiSid, hostUtilSid, IApi, IHostUtil } from '@yunti-private/rn-api';
import { IVisualEventTracking, visualTrackSid } from '@yunti-private/rn-visual-event-tracking';
import { generateIdAndAddToCache } from './id.helper';
import { injectable } from './inject.helper';
import { Constructor, Id } from './inversify.types';

function decorateCatchable(
  decorator: ClassDecorator | ParameterDecorator | MethodDecorator,
  constructor: any,
  parameterIndex?: string | number
): void {
  try {
    decorate(decorator, constructor);
  } catch (e) {
    if (e.message !== 'Cannot apply @injectable decorator multiple times.') {
      throw e;
    }
  }
}

/**
 * This class is the wrapper of inversify Container to add more functionalities.
 * The library exports an instance of the class but you can create your own instance
 */
export class Container extends InversifyContainer {
  public bindTo<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingInWhenOnSyntax<T> {
    const id = generateIdAndAddToCache(constructor, customId);
    decorateCatchable(injectable(), constructor);

    return super.bind<T>(id).to(constructor);
  }

  public addTransient<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingWhenOnSyntax<T> {
    const id = generateIdAndAddToCache(constructor, customId);
    decorateCatchable(injectable(), constructor);

    return super
      .bind<T>(id)
      .to(constructor)
      .inTransientScope();
  }

  public addSingleton<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingWhenOnSyntax<T> {
    const id = generateIdAndAddToCache(constructor, customId);
    decorateCatchable(injectable(), constructor);

    return super
      .bind<T>(id)
      .to(constructor)
      .inSingletonScope();
  }

  public addRequest<T>(constructor: Constructor<T>, customId?: Id): interfaces.BindingWhenOnSyntax<T> {
    const id = generateIdAndAddToCache(constructor, customId);
    decorateCatchable(injectable(), constructor);

    return super
      .bind<T>(id)
      .to(constructor)
      .inRequestScope();
  }

  public get<T>(serviceIdentifier: Id): T {
    return super.get<T>(serviceIdentifier);
  }

  public getApi = (): IApi => {
    return container.get<IApi>(apiSid);
  };

  public getHostUtil = (): IHostUtil => {
    return container.get<IHostUtil>(hostUtilSid);
  };

  public getVisualEventTracking = (): IVisualEventTracking => {
    return container.get<IVisualEventTracking>(visualTrackSid);
  };
}

let container: Container;

export function getContainer(): Container {
  return container;
}

export function setContainer(options?: interfaces.ContainerOptions): Container {
  return (container = new Container(options));
}

export function resetContainer() {
  getContainer().unbindAll();
}
