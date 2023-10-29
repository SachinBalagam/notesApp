// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  text-align: center;
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  width: 70vw;
  box-shadow: 0px 0px 14px 4px #aab8c8;
  border-radius: 5px;
`

export const Input = styled.input`
  margin-bottom: 20px;
  border: 0;
  color: #475569;
  outline: none;
`

export const InputTextArea = styled.textarea`
  margin-bottom: 10px;
  height: 150px;
  color: #475569;
  border: 0;
  outline: none;
`

export const CustomButton = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
  height: 40px;
  width: 80px;
  cursor: pointer;
  margin-top: 10px;
`
export const NoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const Image = styled.img`
  width: 100px;
`
export const NoListHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
`
export const NoListDescription = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
export const NotesListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  width: 70vw;
`
