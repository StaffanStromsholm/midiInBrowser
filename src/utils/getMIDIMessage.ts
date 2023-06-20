export function getMidiMessage(message: any) {
    const command = message.data[0];
    const note = message.data[1];
    const velocity = message.data[2];
    const currentNotes: number[] = [];

    switch (command) {
        case 144:
            // noteOnListener(note);
            if (!currentNotes.includes(note)) {
                currentNotes.push(note);
            }
            console.log(currentNotes);

            break;
        case 128:
            // console.log("note off");
            // noteOffListener(note);
            if (!currentNotes.includes(note)) return;
            currentNotes.splice(currentNotes.indexOf(note), 1);

            console.log(currentNotes);
            break;
        default:
            break;
    }
}
