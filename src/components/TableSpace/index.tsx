import { Container } from "./style";


interface TableSpaceProps {
    colspan?: number;
    padding?: string | number;
}


export const TableSpace = ({ colspan, padding = 0 } : TableSpaceProps) => {
    return (
        <Container colSpan={colspan} padding={padding}>

        </Container>
    )
}