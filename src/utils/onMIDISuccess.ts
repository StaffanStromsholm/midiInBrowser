import { getMIDIMessage } from ".";

export function onMIDISuccess (midiAccess: any) {
    const inputs = midiAccess.inputs;
    const outputs = midiAccess.outputs;

    for(var input of midiAccess.inputs.values()){
      input.onmidimessage = getMIDIMessage;
    }
}