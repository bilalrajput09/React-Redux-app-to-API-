import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsersActionCreator } from "../redux/userSlice";
import styles from "./fetchedUser.module.css";

const FetchedUser = () => {
  const usersState = useSelector((state) => state.users);
  const { users, isLoading, hasError } = usersState;
  const dispatch = useDispatch();

  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchUsersActionCreator());
  }, [dispatch]);

  return (
    <Fragment>
      {!isLoading && hasError && <p>Something went wrong!</p>}
      {isLoading ? (
        <p className={styles.fetchedUsers_container}>Loading....</p>
      ) : (
        <ul className={styles.fetchedUsers_container}>
          <div>USERS</div>
          {users.map((user) => (
            <li key={user.id.name}>
              {user.name.first}
              {user.name.last}
            </li>
          ))}
          <span>Designed by BILAL AHMED</span>
        </ul>
      )}
    </Fragment>
  );
};

export default FetchedUser;
