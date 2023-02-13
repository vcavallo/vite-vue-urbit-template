export interface MyPokePayload {
  some: {
    thing: string;
  }
}

export type MyPokes = MyPokePayload // | OtherPokePayload | AnotherPayload
