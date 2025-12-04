import { Helmet } from 'react-helmet';
import '../assets/css/BlogPage.css'
import img from '../assets/img/container1.jpg';
import img2 from '../assets/img/c1.jpg';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'How Container Shipping Abu Dhabi for Furniture Helps You Move Safely',
      description: 'Relocate your priceless furniture without a doubt and mishap through the professional container shipping services in Abu Dhabi. See how our specialists provide you with a carefree move either abroad or locally......',
      metaTitle:'Safe Furniture Moving: Container Shipping Services in Abu Dhabi',
      metaDescription:'Relocate your priceless furniture without a doubt and mishap through the professional container shipping services in Abu Dhabi. See how our specialists provide you with a carefree move either abroad or locally.',
      thumbnail: img,
      date: 'December 04 2025',
      url: '/blog/how-container-shipping-abu-dhabi-for-furniture-helps-you-move-safely'
    },
     {
      id: 2,
      title: 'How to Choose the Right Container for Shipping Furniture?',
      description: 'Shipping big objects, such as furniture, internationally may be fairly troublesome. Positively, its not as difficult as you might think.....',
      metaTitle:'Best Containers for Safe Furniture Shipping Guide.',
      metaDescription:'Learn how to choose the correct container for shipping furniture safely with suggestions on size, protection, and transport considerations for damage-free delivery.',
      thumbnail: img2,
      date: 'December 4, 2025',
      url: '/blog/how-to-choose-right-container'
    },
  ];
  const titles = blogPosts.map(post => post.metaTitle).join(' | ');
  const descriptions = blogPosts.map(post => post.metaDescription).join(' ');

  return (
    <>
    <Helmet>
        <title>{titles}</title>
        <meta name="description" content={descriptions.slice(0, 150) + '...'} />
      </Helmet>
    <div className="blog-page">
      <div className="blog-header">
        <h1>
          <a href="/blogs" className="recent-blogs-link">Recent Blogs</a>
        </h1>
        <p className="blog-subtitle">Stay updated with our latest articles and tutorials</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-thumbnail">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3 className="blog-title" style={{textAlign:'justify'}}>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description" style={{textAlign:'justify'}}>{post.description}</p>
              <Link to={post.url} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;