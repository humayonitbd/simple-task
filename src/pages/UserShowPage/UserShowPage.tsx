
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../FirstPage/FirstPage";
const UserShowPage = () => {
  const navigate = useNavigate();
  const userDetailsString = localStorage.getItem("userDetails");
  const userDetails: UserDetails | null = userDetailsString
    ? JSON.parse(userDetailsString)
    : null;

  if (!userDetails) {
    navigate("/");
  }
  return (
    <div>
      <div>
        <h1>Welcome, {userDetails?.name}!</h1>
        <p>Phone Number: {userDetails?.phoneNumber}</p>
        <p>Email: {userDetails?.email}</p>
      </div>
    </div>
  );
};

export default UserShowPage;
