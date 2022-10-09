export class Injector {
  private static _instance: Injector;
  private readonly _providers: Map<string, any> = new Map<string, any>();
  private readonly _dependencies: Map<string, any> = new Map<string, any>();

  public static get instance(): Injector {
    if (!Injector._instance) {
      Injector._instance = new Injector();
    }
    return Injector._instance;
  }

  public register(name: string, value: any): void {
    if (!this._providers.has(name)) {
      this._providers.set(name, value);
    }
  }

  public getProvider(name: string): any {
    return this._providers.get(name) || null;
  }

  public setInstance(name: string, value: any): void {
    if (!this._dependencies.has(name)) {
      this._dependencies.set(name, value);
    }
  }

  public getInstance(name: string): any {
    console.log("_providers", this._providers);
    console.log("_dependencies", this._dependencies);
    return this._dependencies.get(name) || null;
  }
}
