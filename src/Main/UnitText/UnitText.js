import './UnitText.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function UnitText(props) {
 let data = props.data;
 const url = useParams().unit;
 const text = data[url].map(item => <p className='p-text' key={item}>{item}</p>)
 console.log(text)
 return (
  <div className='unittext-container'>
   <div className='wrapper-text'>
    <Link to='/'>Назад</Link>
    {text}
   </div>
  </div>
 );
}

export default UnitText;
