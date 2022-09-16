import styled from "styled-components";
import { Rating } from "@mui/material";

const Card = styled.article`
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  background-color: black;
  border: 2px solid #b71c1c;
  padding: 0.75rem 1.4rem;
  row-gap: 0.55rem;
  width: 500px;
  height: fit-content;
`;

function ReviewCard({ details, content }) {
  return (
    <Card>
      <p>{details.username}</p>
      <Rating
        size="large"
        precision={0.1}
        readOnly
        value={details.rating / 2}
      />
      <p>{content}</p>
    </Card>
  );
}

export default ReviewCard;
