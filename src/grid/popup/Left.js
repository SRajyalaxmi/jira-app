import React,{useContext} from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Pheader.css'
import { Context } from '../../context/context';

const Left = () => {
  const context = useContext(Context);
  const {data} = context;
  
  return (
    <div>
        <h1>Store technical Improvements</h1>
        <div className='fleft'>
            <AttachFileIcon/>Attach
            <ContentCopyIcon/>Link Issues
            <AirplanemodeActiveIcon/>Zeplin for Jira
            <SsidChartIcon/>Attach Lucidchart Diagram
            <MoreHorizIcon/>
        </div><br/><br/>
        <span>Description</span>
        <h5>Store technical Improvements</h5>
    </div>
  )
}

export default Left