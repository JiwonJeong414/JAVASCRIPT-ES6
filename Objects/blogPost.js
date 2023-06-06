// title
// body
// author
// views
// comments
//  (author, body)
// isLive

const blogPost = {
  title: "Why Not?",
  body: `asdfasdfcontent content`,
  author: "John Smith II",
  views: 1229239239230,
  comments: [
    { author: "badPostReviewer", body: "rlly bad post I hate you" },
    { author: "niceNice", body: "great job kid" },
  ],
  isLive: true,
};

console.log(blogPost);

let post = new Post("a", "b", "c");

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
