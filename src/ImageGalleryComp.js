import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageGalleryComp.css';

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);
 

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20`);
      setPhotos(res.data);
    };
    fetchPhotos();
  }, []);


  return (
    <div className="app">
      <h1>Photo Gallery</h1>
      <div className="grid">
        {photos.map(photo => (
          <div className="photo" key={photo.id}>
            <img src={photo.url}/>            
          </div>
        ))}
      </div>    
    </div>
  );
};

export default ImageGallery;
