import React, { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import "../../styles/files.scss";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { AiOutlineFileText } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ResizeTextArea from "../../helpers/resizeTextarea";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  onClose: () => void;
}

function CustomDialogTitle(props: DialogTitleProps) {
  const { onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: "0 5px", display: "flex" }}>
      <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
        <input placeholder="Header" type="text" className="editor-header" />
      </Stack>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

function ModalSheetContent({ open, handleClose }) {
  const _contentState = ContentState.createFromText("");
  const raw = convertToRaw(_contentState); // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON

  return (
    <CustomDialog
      onClose={() => handleClose(false)}
      open={open}
      className="document-modal"
    >
      <CustomDialogTitle onClose={() => handleClose(false)} />
      <DialogContent sx={{padding: 0}}>
        {/* <Card variant="outlined">
          <CardContent> */}
            <Editor
              defaultContentState={contentState}
              onContentStateChange={setContentState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              toolbar={{
                options: [
                  "inline",
                  "list",
                  "textAlign",
                  "colorPicker",
                  "remove",
                  "history",
                ],
                inline: {
                  inDropdown: false,
                  options: ["bold", "italic", "underline", "monospace"],
                },
                list: { inDropdown: false },
                textAlign: { inDropdown: false },
                link: { inDropdown: false },
                history: { inDropdown: false },
              }}
              hashtag={{
                separator: " ",
                trigger: "#",
              }}
              mention={{
                separator: " ",
                trigger: "@",
                suggestions: [
                  { text: "JavaScript", value: "javascript", url: "js" },
                  { text: "Golang", value: "golang", url: "go" },
                ],
              }}
            />
          {/* </CardContent>
        </Card> */}
      </DialogContent>
    </CustomDialog>
  );
}

export default function Files(props: any) {
  const [open, setOpen] = React.useState(false);
  const editableRef = useRef<any>(null);
  const [textareaheight, setTextareaheight] = useState(1); 

  const onClick = () => {
        
  }
  const onInput = (e: any) => {    
    // editableRef.current.style.height = "5px";
    // editableRef.current.style.height = (editableRef.current.scrollHeight)+"px";
    console.log( e.target.rows ) 
    const height = e.target.scrollHeight; 
    const rowHeight = 15; 
    const trows = Math.ceil(height / rowHeight) - 1; 
    
    if (trows &&  textareaheight) { 
      
      setTextareaheight(trows); 
      
    } 
  }

  return (
    <div className="sheet-card" id="sheet-card">
      <div className="document-container">
        <AiOutlineFileText className="draggable-elem" onDoubleClick={() => setOpen((e) => !e)} />                 
        <div className="details-container">
          <div className="EditableTitle">
            <ResizeTextArea placeholder="New Document" className="doc-textarea"/>
          </div>
          <div className="secondary-details-container">
            <span className="WordCount">0 words</span>
          </div>
        </div>
      </div>
      <ModalSheetContent open={open} handleClose={setOpen} />
    </div>
  );
}
