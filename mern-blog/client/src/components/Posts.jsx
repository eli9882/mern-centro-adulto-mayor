import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import axios from 'axios';
import Loader from './Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
        if (response?.data) {
          setPosts(response.data);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.log(error);
        setPosts([]);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true
  };

  return (
    <section className="posts" id="blogs">
     
      <h2 className="section-heading">Blog</h2>
      {posts.length ? (
        <Slider {...settings}>
          {posts.map(({ _id: id, thumbnail, category, title, description, creator, createdAt }) => (
            <div key={id}>
              <PostItem
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
                createdAt={createdAt}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <h2 className='center'>No Posts Found.</h2>
      )}
     
    </section>
  );
};

export default Posts;
