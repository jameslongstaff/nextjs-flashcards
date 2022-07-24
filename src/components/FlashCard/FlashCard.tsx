import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import FlashCardPropsType from "./FlashCardPropsType";

const FlashCard = (props: FlashCardPropsType) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <Card
        sx={{ mb: 3, cursor: "pointer", userSelect: "none" }}
        onClick={() => setFlipped(!flipped)}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {!flipped ? "front" : "back"}
          </Typography>
          <Typography variant="body2">
            {!flipped ? props.card.title : props.card.content}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FlashCard;
