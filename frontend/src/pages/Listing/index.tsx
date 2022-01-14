import axios from "axios";
import MovieCard from "components/MovieCard";
import { BASE_URL } from "utils/requests";
import Pagination from "../../components/Pagination";

function Listing() {

  //FORMA ERRADA 
    axios.get(`${BASE_URL}/movies`)
    .then(response =>{
        console.log(response.data);
    });

    return (
        <div>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                      <div className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Listing;