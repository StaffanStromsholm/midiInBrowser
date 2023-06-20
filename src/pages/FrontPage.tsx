import React, { useRef } from "react";
import { Button } from "../components/Button";
import { auth } from "../firebase-config";
import AccessMidi from "../components/AccessMidi";
import Keybed from "../components/Keybed";

export function FrontPage() {
    let pianoRef: HTMLDivElement;

    return (
        <div>
            <header className="App-header">
                <div
                    ref={(node) => {
                        console.log("Attaching node: ", node);
                        if (node) {
                            // with this we know node is not null or undefined
                            pianoRef = node;
                        }
                    }}
                ></div>
                <h1>The Really Nice Midi App</h1>
                <AccessMidi />

                {/* <Button onClick={() => auth.signOut()}>
                    <i
                        style={{ position: "absolute", left: "0" }}
                        className="far fa-right-from-bracket"
                    ></i>
                    Sign out
                </Button> */}
            </header>
        </div>
    );
}
