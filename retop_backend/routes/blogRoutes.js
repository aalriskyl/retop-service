const express = require('express');
const router = express.Router();
const {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById
} = require('../controllers/blogController');

// POST /api/blogs - Add a new blog
router.post('/', addBlog);

// GET /api/blogs - Get all blogs
router.get('/', getAllBlogs);

// GET /api/blogs/:id - Get blog by ID
router.get('/:id', getBlogById);

// PUT /api/blogs/:id - Update blog by ID
router.put('/:id', updateBlogById);

// DELETE /api/blogs/:id - Delete blog by ID
router.delete('/:id', deleteBlogById);

module.exports = router;
