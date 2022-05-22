import styled from "styled-components";

const CastMember = styled.div`
  width: 400px;
  height: 350px;
  border-radius: 15px;

  background-image: url(${(props) => props.file_path});
  background-position: center;
`;

export default CastMember;
