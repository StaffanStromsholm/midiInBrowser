import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../components/Context";
import { blackKeys, mapNumberOfKeysToCcValues } from "../utils/noteMappers";
import { BlackKey } from "./BlackKey";
import { WhiteKey } from "./WhiteKey";

const KeybedContainer = styled.div`
    display: flex;
    padding: 10px;
    // background-color: rgba(255, 255, 255, 0.5);
`;

function Keybed(props: any) {
    const context = useContext(Context);

    function Key(props: any) {
        if (blackKeys.includes(props.value))
            return (
                <BlackKey
                    $active={
                        context?.currentMidiNotes &&
                        context?.currentMidiNotes.includes(props.value)
                    }
                />
            );
        return (
            <WhiteKey
                $active={
                    context?.currentMidiNotes &&
                    context?.currentMidiNotes.includes(props.value)
                }
            />
        );
    }

    const keys: any[] = [];

    for (let i = 21; i < mapNumberOfKeysToCcValues; i++) {
        keys.push(<Key key={i} value={i} />);
    }

    return <KeybedContainer>{keys.map((key) => key)}</KeybedContainer>;
}

export default Keybed;
