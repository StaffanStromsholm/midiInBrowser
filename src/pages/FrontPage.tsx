import React from "react";
import { Button } from "../components/Button";
import { auth } from "../firebase-config";

export function FrontPage() {
    return (
        <div>
            <header className="App-header">
                <h1>FrontPage</h1>
                <p>Midi test</p>
            </header>
            <Button onClick={() => auth.signOut()}>
                <i
                    style={{ position: "absolute", left: "0" }}
                    className="far fa-right-from-bracket"
                ></i>
                Sign out
            </Button>
        </div>
    );
}
