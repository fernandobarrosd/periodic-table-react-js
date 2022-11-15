import styled from "styled-components";


interface ContainerStyle {
    padding: string | number;
}

export const Container = styled.td<ContainerStyle>`
    border: 0;
    padding: ${({ padding }) => padding}

    
    
`