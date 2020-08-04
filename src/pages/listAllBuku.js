import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../templates/layout";
import CardBuku from "../components/card/cardBuku";
import { connect } from "react-redux";
import { getListbuku } from "../store/actions/buku";

const mapStateToProps = (state) => {
  return {
    buku:state.bukuReducer.buku,
    books:state.bukuReducer.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getbuku: () => dispatch(getListbuku()),
  };
};

const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const SectionTitle = styled.div`
  margin-bottom: 40px;
  color: #000;
  > h4 {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
  > span {
    color: #898989;
  }
`;

const Index = (props) => {
  const { books} = props;

  useEffect(() => {
    props.getbuku();
  }, []);

  return (
    <Layout>
      <SectionContent>
        <Container>
          <SectionTitle>
            <h4>Semua buku</h4>
            <span>semua jenis buku </span>
          </SectionTitle>
          <Row>
            {books.length === 0 ? (
              <Col>
                <Alert variant="warning">
                  <Alert.Heading>There is no data</Alert.Heading>
                  <p style={{ lineHeight: "1.5" }}>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                </Alert>
              </Col>
            ) : (
              books&&
              books.map((val) => {
                return (
                  <Col lg={3} className="mb-4">
                    <CardBuku dataCard={val} />
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </SectionContent>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
