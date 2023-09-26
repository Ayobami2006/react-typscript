import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1> THIS IS HOME PAGE, USER IS: {username} </h1>
    </div>
  );
};
