import { Container, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "20px",
    right: "20px",
    textAlign: "right",
  },
});
function Score({ score }) {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Typography>Skore: {score}</Typography>
      <Typography>Nejvyší skore: {0}</Typography>
    </Container>
  );
}

export default Score;
