import Styled from "styled-components";

const StyledBtn = Styled.button`
  border: 4px solid #4caf50;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variety === "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.variety === "outline" ? "#4caf50" : "#fff")};
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  margin-left: 25px;
  margin-top: 25px;
  &:hover{
  background-color: ${(props)=>props.variety !== "outline" ? "#fff" : "#4caf50"};
  color: ${(props) => (props.variety !== "outline" ? "#4caf50" : "#fff")};
  }
`;

export const SubmitBtn = Styled(StyledBtn).attrs({
    type: 'submit'
}) `
    box-shadow: 0 9px #999;
    &:active{
        background-color: ${(props)=>props.variety !== "outline" ? "#fff" : "#4caf50"};
        box-shadow: 0 5px #666;
        transform: translateY(4px); 
    }
` 

export default StyledBtn;


