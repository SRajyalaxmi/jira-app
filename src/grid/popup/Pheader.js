import React,{useContext} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './Pheader.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import { Context } from "../../context/context";

const Pheader = () => {
  const context = useContext(Context);
  const {data} = context;
  return (
    <div className="firstdiv">
      <div>
        <span>BLAZ-873/BLAZ-674</span>
      </div>
      <div className="pop">
        <RemoveRedEyeIcon/>2
        <ThumbUpOffAltIcon/>
        <ShareIcon/>
        <MoreHorizIcon/>
        <CloseIcon/>
      </div>
    </div>
  );
};

export default Pheader;
