import { getMidiMessage } from ".";

export function onMIDISuccess(midiAccess: any) {
    const inputs = midiAccess.inputs;
    const outputs = midiAccess.outputs;

    console.log("inputs: ", inputs);
    console.log("outputs: ", outputs);

    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMidiMessage;
        console.log(input.onmidimessage);
    }
}
