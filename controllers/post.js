const Post = require("../models/post");
const { errorHandler } = require("../helpers/dbErrorHandler");
// define the methods for the posts controller

exports.create = (req, res) => {
  const post = new Post(req.body);
  post.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.send({ data });
  });
};

exports.getAllPosts = (req,res) => {
    Post.find()
    .exec((err, post) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(post)
    })
};

const createUsersPostList = (allPosts, userId) => {
    const postList = [];
    let post;
    if (userId) {
        post = allPosts.filter(p => p.user == userId);
    }
    for (let p of post) {
        postList.push(p)
    };
    return postList;
}
exports.getUserPosts = (req,res) => {
    let userId = req.params.userId;
    Post.find()
    .exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        if (posts) {
            const postList = createUsersPostList(posts, userId);
            res.status(200).json({ postList })
        };
    });
};


exports.removePost = (req,res) => {
  let userId = req.params.userId;
  let postUserId = req.params.userPostId;
  let post = req.params.postId;
  if (userId != postUserId){
      return res.status(400).json({
          message: "You dont have the rights to remove Content"
      })
  } else{
    Post.findByIdAndDelete(post, (err,result)=>{
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        } 
        return result.status(200).json({
            message:"post has been Removed!",
            post:res
        })
    })
  }
};

exports.adminRemovePost = () => {
  console.log("adminRemovePost");
};
