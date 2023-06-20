import React, { ReactNode, useContext, useState } from "react";
import { onMIDISuccess, onMIDIFailure, getMidiMessage } from "../utils";
import { Button } from "./Button";
import { Font } from "./Font";
import Keybed from "./Keybed";
import { Context } from "../components/Context";

function AccessMidi(props: any) {
    const [isMidiSupported, setisMidiSupported] = useState(false);
    const context = useContext(Context);

    const getMidiMessage = (message: any) => {
        const command = message.data[0];
        const note = message.data[1];
        const velocity = message.data[2];
        let isSustained = false;

        switch (command) {
            case 144:
                context?.setCurrentMidiNotes((old: any) => [...old, note]);
                break;
            case 128:
                context?.setCurrentMidiNotes((old: any) =>
                    old.filter((item: any) => item !== note)
                );
                break;
            case 176:
                if (velocity === 0) {
                    isSustained = true;
                } else {
                    isSustained = false;
                }
                break;
            default:
                break;
        }
    };

    const connectMidi = () => {
        if (navigator.requestMIDIAccess) {
            setisMidiSupported(true);

            navigator.requestMIDIAccess().then((midiAccess) => {
                for (var input of midiAccess.inputs.values()) {
                    input.onmidimessage = getMidiMessage;
                }
            }, onMIDIFailure);
        } else {
            console.log("Web midi is not supported");
        }
    };

    return (
        <>
            {!isMidiSupported ? (
                <Button onClick={connectMidi}>Access Midi</Button>
            ) : (
                <Font size="20px">Midi connected!</Font>
            )}
            <br />
            <br />
            <Keybed />
        </>
    );
}

export default AccessMidi;
