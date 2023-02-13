export enum ResponseTypes {
  Scry = "SCRY",
  Fact = "FACT"
}
export type ResponseType = keyof typeof ResponseTypes
