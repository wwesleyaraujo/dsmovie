import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { Link } from 'react-router-dom';
import { MoviePage } from 'types/movies';
import {ReactComponent as StarFull} from 'assets/img/star-full.svg';
import './styles.css';

    type Props = {
        page: MoviePage;
        onChange: Function;
    }

   
function Pagination( {page, onChange } : Props) {
    
    return (

        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box1">
                <button className="dsmovie-pagination-button" disabled={page.first} onClick={()=> onChange(page.number -1)}>
                    <Arrow />
                </button>
                <p>{`${page.number +1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={page.last} onClick={()=> onChange(page.number+1)}>
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
                
           </div> 
          
           <div className="dsmovie-pagination-box2">
                <Link to={"/sortCount#"}> 
                    <button className="vote"> Mais votados </button> 
                </Link>  
                <Link to={"/sortName#"}> 
                    <button className="name"> A-Z</button>
                </Link>
                <Link to={"/sortScore#"}>
                    <button className="score" > Mais  <StarFull/> </button> 
                </Link>
            
           </div>
        </div>
    );
}
export default Pagination;