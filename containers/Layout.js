import React from "react";
import styled from "styled-components";

const Layout =()=>{
    return (<div>
        <Table>
            <Tr>
                <Td></Td>
            </Tr>
            <Tr>
                <Td></Td>
            </Tr>
        </Table>        
        </div>)
}
const Table = styled.table`
    border : 1px solid black
    width : 1000px
    height : 500px;
`
const Tr = styled.tr`
    border : 1px dotted black
`
const Th = styled.th`
    border : 1px solid black
`
const Td = styled.td`
    border : 1px dotted black
`
export default Layout