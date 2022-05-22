import styled from "styled-components";
import { red } from "@mui/material/colors";

const Genre = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  padding: .75rem 1.45rem;
  border-radius: 15px;
  border: 2px solid white;
  outline: none;
  border: none;
  color: #eeeeee;
  transition: 150ms ease-in;

  &:hover {
    color: black;
    background-color: #b71c1c;
    cursor: pointer;
  }
`;

export default Genre;
