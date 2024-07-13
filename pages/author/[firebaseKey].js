import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Card.Img variant="top" src={authorDetails.img} alt={authorDetails.first_name} style={{ height: '400px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
        </h5>
      </div>
      <div className="text-white ms-5 details">
        <p>
          {authorDetails.email}
        </p>
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
      </div>
    </div>
  );
}
