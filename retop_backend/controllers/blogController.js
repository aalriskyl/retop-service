const Blog = require('../model/blogModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

exports.addBlog = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ message: 'Multer error' });
      } else if (err) {
        return res.status(500).json({ message: 'Unknown error occurred' });
      }

      // Normalize the path to use forward slashes
      const normalizedPath = req.file.path.replace(/\\/g, '/');
      const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        imageUrl: `/${normalizedPath}`, // Correctly formatted image URL
        content: req.body.content,
      });

      await newBlog.save();
      console.log('New blog added:', newBlog);  // Log the new blog for verification
      res.status(201).json({ message: 'Blog added successfully', blog: newBlog });
    });
  } catch (error) {
    console.error('Error adding blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
};




// Handler untuk menghapus blog berdasarkan ID
exports.deleteBlogById = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      await blog.remove();
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  // Handler untuk mendapatkan semua blog
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handler untuk mendapatkan satu blog berdasarkan ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Handler untuk memperbarui blog berdasarkan ID
exports.updateBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Update fields based on request body
    blog.title = req.body.title;
    blog.author = req.body.author;
    blog.description = req.body.description;
    blog.content = req.body.content;

    // Save updated blog to database
    await blog.save();
    res.status(200).json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

  