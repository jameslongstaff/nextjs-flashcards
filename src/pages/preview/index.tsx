import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FlashCard from "../../components/FlashCard";
import useCards from "../../hooks/useCards";
import useTags from "../../hooks/useTags";
import shuffleArray from "../../utils/shuffleArray";

const Preview = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, tagsLoaded] = useTags();
  const [cards, cardsLoaded, setOptions, setCards] = useCards({
    tags: selectedTags,
  });
  const [currentCard, setCurrentCard] = useState(undefined);

  useEffect(() => {
    setOptions({ tags: selectedTags });
  }, [selectedTags]);

  useEffect(() => {
    if (selectedTags.length && cards?.length) {
      setCards(shuffleArray(cards));
      setCurrentCard(cards[0]);
    }
  }, [cards]);

  const getPage = () => {
    if (!cards?.length || !currentCard || !selectedTags) {
      return null;
    }

    const currentIndex = cards.findIndex((card) => card.id === currentCard.id);

    return `- ${currentIndex + 1}/${cards.length}`;
  };

  const previousCard = () => {
    const currentIndex = cards.findIndex((card) => card.id === currentCard.id);

    if (currentIndex - 1 >= 0) {
      setCurrentCard(cards[currentIndex - 1]);
    }
  };

  const nextCard = () => {
    const currentIndex = cards.findIndex((card) => card.id === currentCard.id);

    if (currentIndex + 1 !== cards.length) {
      setCurrentCard(cards[currentIndex + 1]);
    }
  };

  return (
    <>
      <Typography variant="h6" component="h2">
        Preview
      </Typography>

      {tags && tagsLoaded && (
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              px: 0,
              mt: 2,
            }}
            component="ul"
          >
            <Autocomplete
              value={selectedTags}
              onChange={(event, value) => setSelectedTags(value)}
              multiple
              options={tags as []}
              sx={{ my: 2 }}
              fullWidth
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  id="tags"
                  name="tags"
                  {...params}
                  label="Add a tag"
                  size="small"
                  variant="outlined"
                />
              )}
            />
          </Box>

          <Typography
            sx={{ fontSize: 14, mb: 2 }}
            color="text.secondary"
            gutterBottom
          >
            {!!selectedTags?.length ? cards.length : 0} results for tags{" "}
            {selectedTags.map((tag) => tag.title).join(", ")}
            {getPage()}
          </Typography>

          {!!cards?.length && !!selectedTags?.length && !!currentCard && (
            <>
              <FlashCard card={currentCard} />
              <Button onClick={() => previousCard()} variant="outlined">
                Previous
              </Button>
              <Button onClick={() => nextCard()} variant="outlined">
                Next
              </Button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Preview;
