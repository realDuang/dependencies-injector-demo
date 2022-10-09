import { Injector } from "./injector";

export function Injectable(): ClassDecorator {
  return (target: any): any => {
    const instanceName = toCamelCase(target.name);
    Injector.instance.register(instanceName, target);
    return target;
  };
}

function toCamelCase(str: string) {
  const sMatch = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  if (!sMatch) {
    return str;
  }

  const s = sMatch
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
}
