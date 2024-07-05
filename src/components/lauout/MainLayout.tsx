
import  {Outlet} from 'react-router-dom'
import Header from '../../SharedPage/Header/Header';


const MainLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
};

export default MainLayout;