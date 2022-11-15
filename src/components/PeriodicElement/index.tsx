import { Container } from "./style";
import { PeriodicElementType } from "../../types";


interface PeriodicElementProps {
    type: PeriodicElementType;
    name: string;
    
}

export const PeriodicElement = ({ name, type } : PeriodicElementProps) => {
    
    return (
        <Container type={type}>
            { name }
        </Container>
    )
}