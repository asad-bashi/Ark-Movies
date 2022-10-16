import styled from "styled-components";
import { Rating, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Card = styled.article`
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
  border: 2px solid #b71c1c;
  padding: 0.75rem 1.4rem;
  row-gap: 0.55rem;
`;

function ReviewCard({ details, content }) {
  return (
    <Card>
      <Stack
        alignItems="center"
        width="fit-content"
        columnGap={3}
        direction="row"
      >
        <AccountCircleIcon sx={{ fontSize: 35 }} />

        <p>{details.username}</p>
      </Stack>
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
