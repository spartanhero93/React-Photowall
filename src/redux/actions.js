//<==== Remove action ====>//

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index 
  }
}