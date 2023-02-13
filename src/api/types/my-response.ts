import * as Api from '@/api/types/common'

export enum MyResponseFaces {
  SomeThing = "MY-APP-THING",
}

export interface MyAppThingResponse {
  type: Api.ResponseTypes.Scry;
  face: MyResponseFaces.SomeThing;
  fact: Array<any>;
}

export type MyAppResponse =
  MyAppThingResponse // | OtherResponses

export const IsThingResponse = (r: MyAppResponse):
  r is MyAppThingResponse => {
  return (r.face === MyResponseFaces.SomeThing)
}
