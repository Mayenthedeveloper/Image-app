import React from "react";

const Card = ({ images }) => {
  return (
    <div>
      <>
        {images.map((image) => (
          <div className="card" key={image.id}>
            <a
              href={image.largeImageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.webformatURL}
                alt="photograph"
                className="cardImage"
              />
              <div className="cardInfo">
                <p className="user">Photo by {image.user} </p>
                <p>
                  <i className="fas fa-eye"></i>
                  <span>Views: </span>
                  {image.views}
                </p>
                <p>
                  <i className="fas fa-downloads"></i>
                  <span>Downloads:</span>
                  {image.downloads}
                </p>
                <p>
                  <i className="fas fa-heart"></i>
                  <span>Likes:</span>
                  {image.likes}
                </p>
                <p>
                  <i className="fas fa-comment"></i>
                  <span>Comments:</span>
                  {image.comments}
                </p>
                <div className="tags">
                  {image.tags
                    .split(",")
                    .map((tag, index) =>
                      tag.length >= 11 ? "" : <span key={index}>#{tag}</span>
                    )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </>
    </div>
  );
};

export default Card;
