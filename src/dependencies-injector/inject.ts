import { Injector } from "./injector";

export function Inject(): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    if (typeof propertyKey === "symbol") {
      propertyKey = propertyKey.toString();
    }

    const instance = Injector.instance.getInstance(propertyKey);
    if (!instance) {
      const Dependency = Injector.instance.getProvider(propertyKey);
      const dependency = new Dependency();
      Injector.instance.setInstance(propertyKey, dependency);
    }

    target[propertyKey] = Injector.instance.getInstance(propertyKey);
  };
}
