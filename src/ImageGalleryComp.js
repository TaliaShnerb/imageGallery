import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageGalleryComp.css';

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 20;

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${(currentPage - 1) * photosPerPage}&_limit=${photosPerPage}`);
      setPhotos(res.data);
    };
    fetchPhotos();
  }, [currentPage]);

  const totalPages = Math.ceil(5000 / photosPerPage); 

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
