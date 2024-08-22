// Style your elements here
import styled from 'styled-components'

export const NoteItemLi = styled.li`
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 list-style-type:none;
  border:1px solid #aab8c8;
  padding:15px;
  width:450px;
  margin-right:15px;
  margin-bottom:15px;
  border-radius:15px;
  
  
`

export const NoteItemTitle = styled.h1`
  font-family:'Roboto';
  font-size:20px;
  color:#334155;
`

export const NoteItemText = styled.p`
 font-family:'Roboto';
  font-size:17px;
  color:#475569;
  line-height:30px;

`
