import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const useStyles = makeStyles({
  progressBar: {
    position: "absolute",
    left: "50%",
    top: "50%",
    height: "70%",
    transform: "translate(-50%, -50%)",
  },
});
function Bar({ stop }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const T = setInterval(() => {
      setPercentage((percentage) => percentage + 5);
    }, 2000);
    return () => clearInterval(T);
  }, []);
  if (percentage >= 100) {
    stop();
  }

  const sty = useStyles();

  return (
    <CircularProgressbar
      className={sty.progressBar}
      styles={buildStyles({
        pathColor: "#3f50b5",
      })}
      value={percentage}
    />
  );
}

export default Bar;
