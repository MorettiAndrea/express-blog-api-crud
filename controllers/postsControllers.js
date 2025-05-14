// import
const posts = require("../data/posts");

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
    res.status(404);
  }
  res.json({ message: "pizza not found", error: "404 not found" });
  return;
};

const store = (req, res) => {
  res.json("da fare");
};

const update = (req, res) => {
  res.json("da fare");
};

const modify = (req, res) => {
  res.json("da fare");
};

const destroy = (req, res) => {
  res.json("da fare");
};

module.exports = { index, show, store, update, modify, destroy };
