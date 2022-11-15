import styled, { css } from "styled-components";
import { PeriodicElementType } from "../../types";


interface ContainerStyleProps {
    type: PeriodicElementType;
}

export const Container = styled("td")<ContainerStyleProps>(props => ({
      backgroundColor: 
      props.type === "metal-alcalino" ? "rgb(218, 150, 24)" :
      props.type === "metal-alcalino-terroso" ? "rgb(255, 166, 0)" : 
      props.type === "metal-de-transicao" ? "rgb(238, 90, 114)" : 
      props.type === "actinidios" ? "rgb(190, 105, 190)" :
      props.type === "gas-nobre" ? "rgb(60, 60, 199)" :
      props.type === "nao-metal" ? "rgb(38, 197, 38)" : 
      props.type === "outro-metal" ? "rgb(131, 131, 231)" : 
      props.type === "semimetal" ? "rgb(28, 104, 97)" : 
      props.type === "halogenios" ? "rgb(122, 216, 210)" :
      "rgb(69, 175, 168)",

      
}))



