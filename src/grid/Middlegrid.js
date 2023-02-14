import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Left from "../left/Left";
import "./Middlegrid.css";
import Popupcard from "../middle/Popupcard";
import {Context} from '../context/context';

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Middlegrid() {
  const context = useContext(Context);
  const {data, typeChange} = context;
  // const [characters, updateCharacters] = useState([
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  // ]);
  // function handleOnDragEnd(result) {
  //   if (!result.destination) return;

  //   const items = Array.from(characters);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   updateCharacters(items);
  // }
 

  const hold = data.filter((f)=>f.type==="HOLD")
  const submmited = data.filter((f)=>f.type==="SUBMMITED")
  const resolved = data.filter((f)=>f.type==="RESOLVED")

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item>
            <Left />
          </Item>
        </Grid>

        <Grid item xs={10} className="gird">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={2.5}>
                <Item>HOLD</Item>
                <Item>
                  <div>
                    {hold.map((data)=>{
                      return <Popupcard data={data} change={typeChange} />
                    }
                    )}
                  </div>
                </Item>
              </Grid>
              <Grid item xs={2.5}>
                <Item>RESOLVED</Item>
                <Item>
                  <div>
                  {resolved.map((data)=>{
                      return <Popupcard data={data} change={typeChange} />
                    }
                    )}
                  </div>
                </Item>
              </Grid>
              <Grid item xs={2.5}>
                <Item>SUBMMITED</Item>
                <Item>
                  <div>
                  {submmited.map((data)=>{
                      return <Popupcard data={data} change={typeChange} />
                    }
                    )}
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* <Grid>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ id }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div>
                              <Popupcard />
                            </div>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Grid> */}
      </Grid>
    </Box>
  );
}
