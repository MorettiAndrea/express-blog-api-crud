// import
const posts = require("../data/posts");
const { post } = require("../routers/postsRoutes");

const index = (req, res) => {
  const filtredTitle = req.query.titolo;
  const filtredContent = req.query.contenuto;
  const filtredTags = req.query.tags;

  let filtredPosts = [...posts];

  if (filtredTitle) {
    filtredPosts = filtredPosts.filter((post) =>
      post.titolo.includes(filtredTitle)
    );
  }
  if (filtredContent) {
    filtredPosts = filtredPosts.filter((post) =>
      post.contenuto.includes(filtredContent)
    );
  }
  if (filtredTags) {
    filtredPosts = filtredPosts.filter((post) =>
      post.tags.includes(filtredTags)
    );
  }
  res.json({ data: filtredPosts, status: 200 });
};

const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    res.json({
      status: 404,
      message: "post not found",
      error: "404 not found",
    });
  }
  return res.json(post);
};

const store = (req, res) => {
  const { titolo, contenuto, immagine, tags } = req.body;

  let lastId = 0;

  for (eachPost of posts) {
    if (lastId < eachPost.id) {
      lastId = eachPost.id;
    }
  }
  const newPostId = lastId + 1;
  const newPost = { id: newPostId, titolo, contenuto, immagine, tags };
  posts.push(newPost);
  res.json(newPost);
};

const update = (req, res) => {
  res.json("modifica totalmente un nuovo elemento");
};

const modify = (req, res) => {
  res.json("modifica parzialmente un nuovo elemento");
};

const destroy = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.filter((post) => post.id !== postId);
  if (!post) {
    res.json({
      status: 404,
      message: "post not found",
      error: "404 not found",
    });
  }
  return res.json({ status: 204, message: "Post cancellato", data: post });
};
console.log(posts);

module.exports = { index, show, store, update, modify, destroy };
