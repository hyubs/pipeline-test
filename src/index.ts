import { Person } from './interfaces';

class PipelineTest {
  private person: Person;

  public init(name: string) {
    this.person = {
      name,
    } as Person;
  }

  public sayHello() {
    console.log(`Hello! I'm ${this.person.name}.`);
  }
}

export default new PipelineTest();
