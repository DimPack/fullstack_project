import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/usersSlice";

const UsesList = () => {
  const { users, error, isPending } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const mapUsers = (user) => <li key={user.login.uuid}>{user.email}</li>;
  useEffect(() => {
    dispatch(getUsers({ page: 1, results: 5 }));
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {!error && !isPending && users.length === 0 ? (
        <p>users list empty</p>
      ) : (
        <ol>{users.map(mapUsers)}</ol>
      )}
    </>
  );
};

export default UsesList;
