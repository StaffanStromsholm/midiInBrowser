import styled from "styled-components";

export const WhiteKey = styled.div<{ $active?: boolean }>`
    width: 14px;
    height: 100px;
    border: 1px solid black;
    background-color: ${(props) => (props.$active ? "blue" : "white")};
    border-radius: 0px 0px 3px 3px;
    box-shadow: inset 0 0 2px black;
`;
