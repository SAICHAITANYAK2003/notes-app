// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
`

export const NotesTitle = styled.h1`
  font-family:'Bree Serif';
  color:#4c63b6;
  text-align:center;
  font-weight:400;
`
export const FormContainer = styled.form`
 
   
  padding:10px;
   
  width:50%;
  border-radius:10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const TitleInput = styled.input`
  height:45px;
  border:none;
  outline:none;

   
`

export const TextInput = styled.textarea`
   height:50px;
  border:none;
  outline:none;
  margin-top:20px;
`
export const TitleTextContainer = styled.div`

   display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding-left:20px;
  padding-top:15px;
  
  
`
export const ButtonContainer = styled.div`
  display:flex;
  
  justify-content:flex-end;
   

  padding-right:20px;
  padding-top:15px;
 
`

export const Button = styled.button`
 height:40px;
 width:100px;
 margin-top:30px;
 color:#fff;
 background-color:#4c63b6;
 border:none;
 border-radius:10px;
 cursor:pointer;
`
export const NotesListContainer = styled.div`
   padding-top:30px;
    height:40vh;
    
   
`

export const NotesList = styled.ul`
   margin-top:30px;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
   
   flex-wrap:wrap; 
   width:90%;
   height:50vh;
   overflow-y:scroll; 
`
export const EmptyNotes = styled.div`
    padding:30px;
    height:40vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

export const EmptyNotesTitle = styled.h1`
  font-family:'Roboto';
  color: #334155;
`
export const EmptyNotesImage = styled.img`
  height:80px;
`
export const EmptyNotesText = styled.p`
   font-family:'Roboto';
  color:#475569;
`
