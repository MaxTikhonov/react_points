import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar(props) {
 let data = props.data;
 let arrOfProps = Object.keys(data)
 const listUnits = arrOfProps.map(item => <li key={item}><Link to={`/units/${item}`}>{item}</Link></li>)
 return (
  <div className='sidebar-container'>
   <ul>
    {listUnits}
   </ul>
  </div>
 );
}

export default Sidebar;