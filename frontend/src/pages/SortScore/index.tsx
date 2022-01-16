import axios from "axios";
import MovieCard from "components/MovieCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import Pagination from "../../components/Pagination";
import { MoviePage } from "types/movies";
import SortList from "components/SortList";

function SortScore() {




    const [pageNumber, setPageNumber] = useState(0);
  
    const [page, setPage] = useState<MoviePage>({
      content: [],
      last: true,
      totalPages: 0,
      totalElements: 0,
      size: 50,
      number: 0,
      first: true,
      numberOfElements: 0,
      empty: true
    });
    useEffect(() => {
      axios.get(`${BASE_URL}/sortScore`)
        .then(response => {
          const data = response.data as MoviePage;
          setPage(data);
        });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) =>{
      setPageNumber(newPageNumber);
    };
    return (
      <div>
        <Pagination  page={page} onChange={handlePageChange}/>
        <SortList  page={page} onChange={handlePageChange}/>
        <div className="container">
          <div className="row">
            {page.content.map(movie => (
              <div key={movie.id} className="col-sm-6  col-lg-4  col-xl-3 mb-3">
                <MovieCard movie={movie} />
              </div>
            )
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default SortScore;