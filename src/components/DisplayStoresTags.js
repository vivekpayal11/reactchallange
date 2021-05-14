import React, { useState, useEffect } from "react";

const DisplayStoresTags = ({ video, tags }) => {
  const [storedTages, setStoredTages] = useState(tags);
  useEffect(() => {
    // const LocalStoredTags = loadTagFromLocalStorage();
    setStoredTages(tags);
  }, [video, tags]);

  return (
    <div>
      <div className="ui segment">
        <b>Saved Tags</b>
        {storedTages.map((tag, index) => (
          <div key={index}>{tag} </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayStoresTags;
