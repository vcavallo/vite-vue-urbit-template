import * as PokeTypes from "@/api/types/my-poke"
import * as PP from "@/api/poker"
import * as SS from "@/api/scrier"
import * as R from "@/api/types/my-response"

export const Pokes = {
  SomePoke(thing) { return pokeSomePoke(thing) }
}

export const Scries = {
  Thing() { return scryThing() }
}

function pokeSomePoke(thing: PokeTypes.MyPokePayload['some']['thing']): Promise<any> {
  const poker = new PP.MyPoke(thing)
  return poker.poke()
}

function scryThing(): Promise<R.MyAppThingResponse> {
  const scrier = new SS.ScryThing()
  return scrier.scry()
}
