import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    // border: 1px solid tomato;
`;

export const Button = styled.button`
    background-color: #CBC9C8;
    margin-left: 20px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
        background-color: #B8F9B8;
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const Section = styled.div`
`;