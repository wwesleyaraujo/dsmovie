
import { Link } from 'react-router-dom';
import { MoviePage } from 'types/movies';
import {ReactComponent as StarFull} from 'assets/img/star-full.svg';
import './styles.css';

    type Props = {
        page: MoviePage;
        onChange: Function;
    }

   
function SortList( {page, onChange } : Props) {
    
    return (

        <div className="dsmovie-pagination-container">
           <div className="dsmovie-pagination-box2">
                <Link to={"/sortCount#"}> 
                    <button className="vote"> Mais votados </button> 
                </Link>  
                <Link to={"/sortName#"}> 
                    <button className="name"> Z-A </button>
                </Link>
                <Link to={"/sortScore#"}>
                    <button className="score" > Mais  <StarFull/> </button> 
                </Link>
           </div>
        </div>
    );
}
export default SortList;