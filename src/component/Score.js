import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  con: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
});
function Score({ score }) {
  const styles = useStyles();

  return (
    <div className={styles.con}>
      <h4>Skore: {score}</h4>
      <h4>Nejvyšší skore: {8}</h4>
    </div>
  );
}

export default Score;
