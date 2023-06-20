import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./components/Context";
import PrivateRoute from "./auth/PrivateRoute";
import { FrontPage } from "./pages/FrontPage";
import { Login } from "./pages/Login";
import AccessMidi from "./components/AccessMidi";

function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    {/* <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                
                            </PrivateRoute>
                        }
                    /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<FrontPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
