import urbitAPI from "./urbitAPI";

interface onSubNumber {
  (subNumber: number): void;
}


export function openAirlockTo(
  agent: string,
  onEvent,
  onSubNumber: onSubNumber
) {
  urbitAPI
    .subscribe({
      app: agent,
      path: "/web-ui", // TODO: set to your endpoint
      event: (data) => {
        console.log('REMOVEME: gall response ', data)
        onEvent(data);
      },
    })
    .then((sub: number) => {
      onSubNumber(sub);
    });
}

export function closeAirlock(subscription: number, onClose) {
  urbitAPI.unsubscribe(subscription).then(() => {
    onClose;
  });
}
