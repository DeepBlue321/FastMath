import { Container, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { getHighScore } from "../utils/localScore";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "20px",
    right: "20px",
    textAlign: "right",
  },
});
function Score({ score, symbols }) {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Typography>Skore: {score}</Typography>
      <Typography>Nejvyší skore: {getHighScore(symbols)}</Typography>
    </Container>
  );
}

export default Score;
