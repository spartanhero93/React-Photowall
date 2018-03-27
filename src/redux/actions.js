//<==== Remove action ====>//

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index 
  }
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post// =>> post: post
  }
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId
  }
}