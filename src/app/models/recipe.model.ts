
export class Recipe {
  public done: boolean = false;
  constructor (public title: string, public ingrediants: any, public directions: any, public priority: number){}
}
