import { RootState } from '../../store/store';
import { loadData } from './profilePage.slice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const pageState = useSelector((state: RootState) => state.profilePage);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/6')
      .then((response) => response.json())
      .then((json) => {
        const payload = {
          name: json.name,
          email: json.email,
          phone: json.phone,
          website: json.website,
        };
        dispatch(loadData(payload));
      });
  }, []);

  return (
    <div className="profile-page container">
      <div>
        <b>Name:</b> {pageState.name}
      </div>
      <div>
        <b>Email:</b> {pageState.email}
      </div>
      <div>
        <b>Phone:</b> {pageState.phone}
      </div>
      <div>
        <b>Website:</b> {pageState.website}
      </div>
    </div>
  );
};
