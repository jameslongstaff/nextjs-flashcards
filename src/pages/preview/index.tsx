import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useCards from "../../hooks/useCards";
import useTags from "../../hooks/useTags";

const Preview = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, tagsLoaded] = useTags();
  const [cards, cardsLoaded, setOptions] = useCards({ tags: selectedTags });

  useEffect(() => {
    setOptions({ tags: selectedTags });
  }, [selectedTags]);

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

          {cards?.length && <div>{cards.length}</div>}
        </>
      )}
    </>
  );
};

export default Preview;
