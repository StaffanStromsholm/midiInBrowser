import React, { useCallback, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { Context } from "../components/Context";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import { E_Font, Font } from "../components/Font";

const AdminPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0 auto;
`;

const StyledInput = styled.input`
    border: 1px solid gray;
    width: 300px;
    height: 30px;
    border-radius: 8px;
    padding-left: 5px;
`;

const ContentWrapper = styled.div`
    width: 300px;
`;

const Login: React.FunctionComponent<any> = () => {
    const context = useContext(Context);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const handleLogin = useCallback(
        async (event: any) => {
            event.preventDefault();
            try {
                if (emailRef.current && passwordRef.current) {
                    await auth.signInWithEmailAndPassword(
                        emailRef.current.value,
                        passwordRef.current.value
                    );
                    navigate("/");
                }
            } catch (error) {
                alert(error);
            }
        },
        [navigate]
    );

    if (context?.currentUser) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <AdminPageWrapper>
                <Font weight={"light"} size={E_Font.FONT_SIZE_TITLE}>
                    Login
                </Font>
                <br />
                <br />
                <ContentWrapper>
                    <Font weight={"light"} size={E_Font.FONT_SIZE_BASIC}>
                        Username
                    </Font>
                </ContentWrapper>

                <StyledInput type="email" ref={emailRef} required />
                <br />

                <ContentWrapper>
                    <Font weight={"light"} size={E_Font.FONT_SIZE_BASIC}>
                        Password
                    </Font>
                </ContentWrapper>

                <StyledInput type="password" ref={passwordRef} required />

                <Button onClick={handleLogin}>Login</Button>
            </AdminPageWrapper>
        </>
    );
};

export {Login};