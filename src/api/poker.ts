import urbitAPI from "./urbitAPI";
import * as P from "@/api/types/my-poke"

const MyMarkFile = "some-mark"

class MyAction {
  payload: any;

  constructor(
    payload: P.MyPokes
  ) {
    this.payload = payload
  }

  poke(): Promise<any> {
    const json = this.payload
    console.log('json ', json)
    return urbitAPI.poke({
      app: 'my-app', // TODO:
      mark: MyMarkFile,
      json
    })
  }
}

export class MyPoke extends MyAction {
  declare payload: P.MyPokePayload['some']['thing'];

  constructor(thing: P.MyPokePayload['some']['thing']) {
    const json: P.MyPokePayload = {
      some: {
        thing
      }
    }
    super(json)
  }
}
