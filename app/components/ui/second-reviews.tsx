// components/ReviewCard.js

import Image from 'next/image';

const SecondReview = ({ id, image, review }) => {
  return (
    <div className="review-card">
      <div className="review-image">
        <Image
          src={image}
          alt={`Review ${id}`}
          width={800}
          height={600}
          layout="responsive"
        />
      </div>
      <p className="review-text">{review}</p>
    </div>
  );
};

export default SecondReview;
