import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
      {newsArticle("Is Redux too good?", "Code - 123 readers")}
      {newsArticle("PAPA react launches course?!", "Top news - 6503 readers")}
    </div>
  );
}

export default Widgets;