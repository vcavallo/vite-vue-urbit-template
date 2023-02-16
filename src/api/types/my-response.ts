import * as T from '@/types'
import * as Api from '@/api/types/common'

export enum MyResponseFaces {
  SomeThing = "MY-APP-THING",
  SomeOtherThing = "MY-APP-OTHER-THING",
}

export interface MyAppThingResponse {
  type: Api.ResponseTypes.Scry;
  face: MyResponseFaces.SomeThing;
  fact: Array<T.ExampleResponseOne>;
}

export interface MyAppOtherResponse {
  type: Api.ResponseTypes.Scry;
  face: MyResponseFaces.SomeOtherThing;
  fact: Array<any>;
}

export type MyAppResponse =
  MyAppThingResponse |
  MyAppOtherResponse // | OtherResponses

export const IsThingResponse = (r: MyAppResponse):
  r is MyAppThingResponse => {
  return (r.face === MyResponseFaces.SomeThing)
}
