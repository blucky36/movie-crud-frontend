import React, {Fragment} from "react"
import Movie from "./movie"

const Movies = (props) => (
  <Fragment>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Director</th>
          <th scope="col">Year</th>
          <th scope="col">My Rating</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map(movie=><Movie key={movie.id} movie={movie} editBtn = {props.editBtn} delBtn = {props.del}/>)}
      </tbody>
    </table>
  </Fragment>
)

export default Movies
