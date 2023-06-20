import styled from "styled-components";

export const BlackKey = styled.div<{ $active?: boolean }>`
    width: 9px;
    height: 60px;
    border: 1px solid black;
    background-color: ${(props) =>
        props.$active ? "blue" : "rgb(40, 40, 40)"};
    border-radius: 0px 0px 3px 3px;
    margin-left: -5px;
    margin-right: -5px;
    z-index: 2;
`;
