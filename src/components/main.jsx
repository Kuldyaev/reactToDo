import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Main = function DoctorInfoCard() {
    const isAuthorized = useSelector((state) => state.users.isAuthorized);
    const navigate = useNavigate();

    useEffect(() => {
        !isAuthorized &&  navigate("/login")
    },[]);

  return (
    <main>
      <p>Main</p>
    </main>
  );
};
export default Main;
