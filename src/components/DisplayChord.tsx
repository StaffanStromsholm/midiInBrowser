import React, { useContext } from "react";
import { Chord } from "tonal";
import { Context } from "../components/Context";
import { detect } from "@tonaljs/chord-detect";
import { noteNames } from "../utils/noteMappers";
import { Font } from "./Font";
import styled from "styled-components";

const DisplayChordWrapper = styled.div`
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function DisplayChord() {
    const context = useContext(Context);
    const currentMidiNotes = context?.currentMidiNotes;
    const currentNoteNames =
        currentMidiNotes &&
        currentMidiNotes.map((note: number) => noteNames[note]);

    const chord = currentNoteNames && Chord.detect(currentNoteNames)[0];
    const altChord = currentNoteNames && Chord.detect(currentNoteNames)[1];

    return (
        <DisplayChordWrapper>
            <Font padding="10px" size="20px">
                {chord}
            </Font>
            <Font>{altChord}</Font>
        </DisplayChordWrapper>
    );
}

export default DisplayChord;
