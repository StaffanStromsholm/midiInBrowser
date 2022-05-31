import React, { useEffect } from "react";
import { onMIDISuccess, onMIDIFailure } from "./utils";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./components/Context";
import PrivateRoute from "./components/PrivateRoute";
import { FrontPage } from "./pages/FrontPage";
import { Login } from "./pages/Login";

//notes C -> B
const level1Notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];

function App() {
    useEffect(() => {
        if (navigator.requestMIDIAccess) {
            console.log("Web midi is supported in this browser");
            navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
        } else {
            console.log("Web midi is not supported");
        }
    }, []);

    return (
        <Provider>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <FrontPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
