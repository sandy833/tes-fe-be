import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../templates/layout";
import numeral from "numeral";

import { connect } from "react-redux";
import { getBukuById } from "../store/actions/buku";


const mapStateToProps = (state) => {
  return {
    buku: state.bukuReducer.buku,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getbukuId: (id) => dispatch(getBukuById(id)),
  };
};

const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const Detailbuku = (props) => {
  const { buku, match } = props;

  useEffect(() => {
    props.getbukuId(match.params.id);
  }, []);
  console.log(buku, "Detail buku");
  return (
    <Layout>
      <SectionContent>
        <Container>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-fluid"
                variant="top"
                alt=""
                //src={buku.imageUrl}
                src="https://s0.bukalapak.com/morgana/0f574c220004042a900720b5/s-330-330/2018_05_21T14_06_49_07_00.jpg.webp"
                width={450}
              />
            </div>
            <div className="col-md-4">
              <h4
                className="my-2 font-weight-bold"
                style={{ color: "#8052ff" }}
              >
                {`Rp ${numeral(buku.price).format("0,0")}`}
              </h4>
              <h5 className="my-3 text-dark text-left">
                Author: {buku.authorName}
              </h5>
              <h6 className="text-left">buku Synopsis :</h6>
              <p className="text-black-50 text-justify">{buku.synopsis}</p>
            </div>
          </div>
        </Container>
      </SectionContent>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailbuku);
