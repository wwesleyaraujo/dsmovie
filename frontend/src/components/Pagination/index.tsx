import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { Link } from 'react-router-dom';
import { MoviePage } from 'types/movies';
import './styles.css';

    type Props = {
        page: MoviePage;
        onChange: Function;
    }

   
function Pagination( {page, onChange } : Props) {
    
    return (

        <div className="top-buttons"> 
            <div className="dsmovie-pagination-container">
                <div className="dsmovie-pagination-box">
                    <button className="dsmovie-pagination-button" disabled={page.first} onClick={()=> onChange(page.number -1)}>
                        <Arrow />
                    </button>
                    <p>{`${page.number +1} de ${page.totalPages}`}</p>
                    <button className="dsmovie-pagination-button" disabled={page.last} onClick={()=> onChange(page.number+1)}>
                        <Arrow className="dsmovie-flip-horizontal" />
                    </button>
                </div>

                    <div className="dsmovie-pagination-button-List" > 
                    <p> Order by: </p>
                    <ul> 
                        <li>   
                            <Link to={"/sortCount#"}> 
                                 <button> Count </button> 
                            </Link>  
                            <Link to={"/sortName#"}> 
                                 <button> Name </button>
                           </Link>
                           <Link to={"/sortScore#"}>
                                <button> Nota </button> 
                           </Link></li>
                    </ul>
                   </div>
            </div>
        </div>
    );
}
export default Pagination;