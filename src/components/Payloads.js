import React, { useState } from 'react'
import { Grid } from "@material-ui/core";
import PayloadCardComponent from "./PayloadCard";
import { connect } from 'react-redux'
import Pagination from './Pagination';
import './Payload.css';

function Payloads(props) {
  const payloadData = props.data
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(15);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = payloadData.slice(indexOfFirstPost, indexOfLastPost)
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const secondColumnStart = Math.floor(currentPosts.length / 3);
  const thirdColumnStart = Math.floor(secondColumnStart + currentPosts.length / 3);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div>
        <h1 className="payload__header"> <i>Payload {props.loading === true ? 'loading...' : ''}</i></h1>
        <Pagination postsPerPage={postsPerPage} totalPosts={payloadData.length} paginate={paginate} />

        <div className="row">
          <div className="col-md-4">
            {currentPosts.slice(0, secondColumnStart).map(item =>
              <div className="card__element__payload" key={item.id}>
                <Grid container spacing={50} style={{ maxWidth: 1000, margin: "auto", padding: 50 }}>
                  <Grid item md={9} sm={12}>
                    <PayloadCardComponent
                      payload_id={item.payload_id}
                      nationality={item.nationality}
                      manufacturer={item.manufacturer}
                      reference_system={item?.orbit_params?.reference_system}
                    // regime={item.item.orbit_params.links.regime}
                    />
                  </Grid>
                </Grid>
              </div>

            )}
          </div>
          <div className="col-md-4">
            {currentPosts.slice(secondColumnStart, thirdColumnStart).map(item =>
              <div className="card__element__payload" key={item.id}>
                <Grid container spacing={50} style={{ maxWidth: 1000, margin: "auto", padding: 50 }}>
                  <Grid item md={9} sm={12}>
                    <PayloadCardComponent
                      payload_id={item.payload_id}
                      nationality={item.nationality}
                      manufacturer={item.manufacturer}
                      reference_system={item?.orbit_params?.reference_system}
                    // regime={item.item.orbit_params.links.regime}
                    />
                  </Grid>
                </Grid>
              </div>

            )}
          </div>

          <div className="col-md-4">
            {currentPosts.slice(thirdColumnStart).map(item =>
              <div className="card__element__payload" key={item.id}>
                <Grid container style={{ maxWidth: 1000, margin: "auto", padding: 50 }}>
                  <Grid item md={9} sm={12}>
                    <PayloadCardComponent
                      payload_id={item.payload_id}
                      nationality={item.nationality}
                      manufacturer={item.manufacturer}
                      reference_system={item?.orbit_params?.reference_system}
                    />
                  </Grid>
                </Grid>
              </div>

            )}
          </div>
        </div>




        <Pagination postsPerPage={postsPerPage} totalPosts={payloadData.length} paginate={paginate} />

      </div>
    </div >
  )
}


const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
  data: state.dataReducer.data
})

export default connect(mapStateToProps)(Payloads)

// export default Payloadss