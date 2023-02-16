import * as MR from '@/api/types/my-response'

export enum ResponseTypes {
  Scry = "SCRY",
  Fact = "FACT"
}
export type ResponseType = keyof typeof ResponseTypes

// Add all responses your app can generate here.
// It will be used in response handlers to choose the appropriate reaction
export type GallResponse =
  MR.MyAppResponse // | AddOtherResponsesHere

// Define Is....? helpers for response-handling actions to identify
// which action has been received based on Face (and sometimes more properties,
// as needed)
export const IsMyAppResponse = (r: MR.MyAppResponse):
  r is MR.MyAppResponse => {
    return (r.face === MR.MyResponseFaces.SomeThing)
}

export const IsAnotherAppResponse = (r: MR.MyAppResponse):
  r is MR.MyAppOtherResponse => {
    return (r.face === MR.MyResponseFaces.SomeOtherThing && r.fact.length > 0)
}
