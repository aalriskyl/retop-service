// const mongoose = require('mongoose');
// const Blog = require('./model/blogModel'); // Adjust the path to your blog model

// mongoose.connect('mongodb://localhost:27017/toko', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(async () => {
//     console.log('Connected to MongoDB');

//     // Find all blogs and update their imageUrl
//     const blogs = await Blog.find();
//     blogs.forEach(async (blog) => {
//       blog.imageUrl = blog.imageUrl.replace(/\\/g, '/');
//       await blog.save();
//       console.log(`Updated blog ${blog._id}`);
//     });

//     console.log('All blogs updated');
//     mongoose.disconnect();
//   })    
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });
