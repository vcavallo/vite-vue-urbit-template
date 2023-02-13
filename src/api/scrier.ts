import urbitAPI from "./urbitAPI";
import * as R from '@/api/types/my-response'

class MyScry {
  path: string;

  constructor(
    path: string
  ) {
    this.path = path
  }

  scry(): Promise<any> {
    const path = this.path
    console.log('scry path ', path)
    return urbitAPI.scry({
      app: 'my-app', // TODO
      path
    })
  }
}

export class ScryThing extends MyScry {
  constructor() {
    super('/thing')
  }

  scry(): Promise<R.MyAppThingResponse> {
    return super.scry()
  }
}
