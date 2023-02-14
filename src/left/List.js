import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';

import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';
import DirectionsBoatFilledSharpIcon from '@mui/icons-material/DirectionsBoatFilledSharp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Left({songs, setSongs}) {
  return (
    <div style={{position: 'relative'}}>
      <List
      style={{height: 'calc(560px)'}}
    sx={{
      width: '100%',
      maxWidth: 200,
      bgcolor: 'background.paper',
      position: 'fixed',
      overflow: 'scroll',
      maxHeight: 500,
      marginBottom: 60,
      '& ul': { padding: "30px 1px 1px 1px" },
    }}
    subheader={<li />}>
    

    {["PLANNING"].map((sectionId) => (
      <li key={`section-${sectionId}`}>
        <ul>
          <ListSubheader>{` ${sectionId}`}</ListSubheader>
          {[{img: <CalendarViewWeekIcon/>, name: "Backlog"},{img: <ViewHeadlineIcon/>, name: "Active sprints"},
          {img: <TrendingUpSharpIcon/>, name: "Reports"},{img: <CheckBoxSharpIcon/>, name: "Issues"},
          {img: <Inventory2SharpIcon/>, name: "Components"}].map((item) => (
            <ListItem key={`${sectionId}-${item}`}>
              {item.img}
              <ListItemText primary={`${item.name}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}

{["DEVELOPMENT"].map((sectionId) => (
      <li key={`section-${sectionId}`}>
        <ul>
          <ListSubheader>{` ${sectionId}`}</ListSubheader>
          {[{img: <CodeOffSharpIcon/>, name: "Code"},{img: <DirectionsBoatFilledSharpIcon/>, name: "Releases"},
          {img: <AccessTimeIcon/>, name: "Simple Report Lite"},{img: <ScheduleIcon/>, name: "Team Reports"},].map((item) => (
            <ListItem key={`${sectionId}-${item}`}>
              {item.img}
              <ListItemText primary={`${item.name}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
    
    

  </List></div>
  );
}
