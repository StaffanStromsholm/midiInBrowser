import { noteOnListener } from ".";

export function getMIDIMessage (message: any) {
  const command = message.data[0];
  const note = message.data[1];
  const velocity = message.data[2];

  switch (command) {
    case 144:
      console.log("NOTE IS OOOON");
      noteOnListener(note);
      break;
    default:
      break;
  }
}