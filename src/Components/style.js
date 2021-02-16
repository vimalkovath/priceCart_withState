
import styled, { css } from 'styled-components'

export const ButtonChk = styled.span`
color: #000;
font-weight: 600;
cursor: pointer;
  padding: 1em 1em;

  ${props => props.primary && css`
    background: dodgerblue;
    color: white;
  `}
`;


export const Container = styled.div`
  text-align: center;
`
export const Error = styled.div`
padding: 10px;
color:red;
font-weight: bold;
`
export const Table = styled.div`
display: table;
`
export const Tr = styled.div`
display: table-row;
${props => props.priceRow && css`
padding: 15px;
border:1px;
justify-content: space-between;
`}

`;
export const Td = styled.div`
display: table-cell;padding: 18px;
font-size:18px;
 text-align: start;
border-bottom:1px dashed #ccc ;
${props => props.close && css`
color: #ccc;
cursor:pointer;
`}
${props => props.Indtotal && css`
        color:darkorange;
        font-weight: bold;
`}
`
export const Total = styled.div`
padding: 20px 10px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Span = styled.span`
${props => props.Bold && css`
        font-weight: bold;
`}
`
