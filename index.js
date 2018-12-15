function createPost() {
  let title = document.getElementById('postTitle').value;
  let author = document.getElementById('postAuthor').value;
  
    let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFn = _.template(postTemplate);
 
  let postsDiv = document.getElementById('post');
 
  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
 
  //append rather than replace!
  postsDiv.innerHTML += templateHTML;

}