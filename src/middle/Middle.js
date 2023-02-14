import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Middle.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function Middle({data, change}) {
  return (
    <div>
      <Card>
        <CardContent className="box">
          <Typography variant="body2">
            {data.name}
            <br />
            <br />
            <div className="inline">
            <div>
            <BookmarkIcon className="savecolor" />
            <KeyboardDoubleArrowUpIcon className="arrow" />
            </div>
             {data.time}
            </div>
            <br />
            <div className="inline">
              <div className="circle">SR</div>
              <div>{data.id}</div>
            </div>           
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
