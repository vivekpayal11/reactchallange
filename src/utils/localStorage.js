const TAGS = "tags";
export const loadTagFromLocalStorage = () => {
  try {
    const tags = localStorage.getItem(TAGS);
    if (tags === null) return [];
    return tags.split(",");
  } catch {
    return [];
  }
};

export const saveTagToLocalStorage = (tag) => {
  try {
    const storedTages = loadTagFromLocalStorage();
    if (storedTages.indexOf(tag) === -1) {
      storedTages.push(tag);
      localStorage.setItem(TAGS, storedTages.toString());
    }
  } catch {
    //error message
  }
};

export const clearLocalStorageTags = () => {
  localStorage.clear();
};
