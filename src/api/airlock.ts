import urbitAPI from "./urbitAPI";

interface onSubNumber {
  (subNumber: number): void;
}

const desk = process.env.URBIT_DESK;

export function openAirlock(onEvent, onSubNumber: onSubNumber) {
  urbitAPI.reset(); // First wipe all airlocks
  urbitAPI
    .subscribe({
      app: desk,
      path: "/website",
      event: (data) => {
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
