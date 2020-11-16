import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card";
import { connect } from 'react-redux'
import Pagination from './Pagination';
import './History.css';


function History(props) {
  // const { historyData } = props
  const historyData = props.data

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = historyData.slice(indexOfFirstPost, indexOfLastPost)

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <h1 className="history__header"><i> History {props.loading === true ? 'loading...' : ''}</i></h1>
      <Pagination postsPerPage={postsPerPage} totalPosts={historyData.length} paginate={paginate} />
      <div className="cards__display">
        {currentPosts.map(item => (
          <div className="card__element" key={item.id}>
            <Grid container style={{ maxWidth: 1410, margin: "auto" }}>
              <Grid item md={12} sm={12}>
                <CardComponent
                  caption={item.details}
                  flight_number={item.flight_number}
                  title={item.title}
                  text={item.details}
                  actionLink={item.links?.article}
                />
              </Grid>
            </Grid>
          </div>
        ))
        }
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={historyData.length} paginate={paginate} />

    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
  data: state.dataReducer.data
})

export default connect(mapStateToProps)(History)
