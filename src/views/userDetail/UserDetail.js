import React from 'react';
import { useParams } from 'react-router';

function UserDetail() {
  let { id } = useParams();
  return <div>{id} wefewfwe</div>;
}

export default UserDetail;
