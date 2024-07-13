import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { getSingleBook } from '../../../api/bookData';
import AuthorForm from '../../../components/forms/AuthorFrom';
import { getSingleAuthor } from '../../../api/authorData';

export default function EditBook() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<AuthorForm obj={editItem} />);
}
