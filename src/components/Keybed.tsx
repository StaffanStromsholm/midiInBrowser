import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../components/Context";
import { BlackKey } from "./BlackKey";
import { WhiteKey } from "./WhiteKey";

const numberOfKeys = 87;
const blackKeys = [
    1, 4, 6, 9, 11, 13, 16, 18, 21, 23, 25, 28, 30, 33, 35, 37, 40, 42, 45, 47,
    49, 52, 54, 57, 59, 61, 64, 66, 69, 71, 73, 76, 78, 81, 83, 85,
];

const KeybedContainer = styled.div`
    display: flex;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
`;

function Keybed(props: any) {
    const context = useContext(Context);

    function Key(props: any) {
        if (blackKeys.includes(props.value))
            return (
                <BlackKey
                    $active={context?.currentMidiNotes.includes(
                        props.value + 21
                    )} // +21 because of the actual CC values
                />
            );
        return (
            <WhiteKey
                $active={context?.currentMidiNotes.includes(props.value + 21)} // +21 because of the actual CC values
            />
        );
    }

    const keys: any[] = [];

    for (let i = 0; i <= numberOfKeys; i++) {
        keys.push(<Key key={i} value={i} />);
    }

    return <KeybedContainer>{keys.map((key) => key)}</KeybedContainer>;
}

export default Keybed;
