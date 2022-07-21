import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
  },
  components: {
    MuiListItem: {},
  },
});

export default theme;
