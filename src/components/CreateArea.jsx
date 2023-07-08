import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  var [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  var expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {isExpanded && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddBoxIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
