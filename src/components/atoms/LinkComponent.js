import React from "react";

import Typography from "@material-ui/core/Typography";

function LinkComponent({ children }) {
  return (
    <Typography variant="body2" mx={20}>
      {children}
    </Typography>
  );
}

export default LinkComponent;
