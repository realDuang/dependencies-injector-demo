import { Inject, Injectable } from "./dependencies-injector";

@Injectable()
class Service {
  constructor(public name: string = "Service") {}
}

@Injectable()
class Controller {
  @Inject() public service!: Service;
  constructor(public layer: string = "controller") {}
}

@Injectable()
class UnUseClass {
  @Inject() public service!: Service;
  constructor(public layer: string = "controller") {}
}

class View {
  @Inject() public controller!: Controller;
}

const controller = new Controller();
console.log(controller);
const view = new View();
console.log(view);
