import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import firebase from "firebase/compat/app";

export type User = firebase.User;

interface AppContextInterface {
    currentUser: User | null;
    currentMidiNotes: any;
    setCurrentMidiNotes: any;
}

type AuthProverProps = {
    children: React.ReactNode;
};

export const Context = React.createContext<AppContextInterface | null>(null);

export const Provider = (props: AuthProverProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentMidiNotes, setCurrentMidiNotes] = useState<number[] | null>(
        null
    );
    const [pending, setPending] = useState<boolean>(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <>Loading...</>;
    }

    return (
        <Context.Provider
            value={{
                currentUser,
                currentMidiNotes,
                setCurrentMidiNotes,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
