import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Books = ({ no, booksData, doUpdate, doDelete }) => {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const bookStatus = booksData.bookStatus === "FOR_SELL" ? "info" : "warning";

  useEffect(() => {
    setData({
      title: booksData.title,
      author: booksData.author,
      stok:booksData.stok,
      kategori_id:booksData.kategori_id,
      deskripsi:booksData.deskripsi,
      image_url:booksData.image_url,
      no_isbn:booksData.no_isbn,
      berat:booksData.berat,
      sinopsis: booksData.sinopsis,
      harga: booksData.harga,
      bukustatus: booksData.bukustatus,
    });
  }, []);

  const handleUpdate = (id) => {
    doUpdate(id, data);
    setEdit(false);
  };

  const handleDelete = (id) => {
    doDelete(id);
  };

  const handleForm = (e, formName) => {
    setData({ ...data, [formName]: e.target.value });
  };

  //console.log(data, "From component");
  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>{no}</td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              value={data.title}
              onChange={(e) => handleForm(e, "title")}
            />
          </>
        ) : (
          booksData.title
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              value={data.author}
              onChange={(e) => handleForm(e, "author")}
            />
          </>
        ) : (
          booksData.author
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              as="textarea"
              rows="3"
              value={data.sinopsis}
              onChange={(e) => handleForm(e, "sinopsis")}
            />
          </>
        ) : (
          booksData.sinopsis.substr(0, 150)
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              as="select"
              value={data.bukutatus}
              onChange={(e) => handleForm(e, "bukutatus")}
            >
              <option value="FOR_SELL">For Sell</option>
              <option value="OUT_OF_STOCK">Out Of Stock</option>
            </Form.Control>
          </>
        ) : booksData.bukutatus === "FOR_SELL" ? (
          "For Sell"
        ) : (
          "Out Of Stock"
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              value={data.harga}
              onChange={(e) => handleForm(e, "harga")}
            />
          </>
        ) : (
          booksData.harga
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Button
              variant="warning"
              size="sm"
              style={{ marginRight: "5px" }}
              onClick={() => handleUpdate(booksData._id)}
            >
              <i className="ion-checkmark"></i>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setEdit(false);
                setData({
                  title: booksData.title,
                  author: booksData.author,
                  harga: booksData.harga,
                  stok:booksData.stok,
                  kategori_id:booksData.kategori_id,
                  deskripsi:booksData.deskripsi,
                  berat:booksData.berat,
                  image_url:booksData.image_url,
                  bukustatus: booksData.bukustatus,
                  sinopsis: booksData.sinopsis,
                });
              }}
            >
              <i className="ion-backspace"></i>
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="info"
              size="sm"
              style={{ marginRight: "5px" }}
              onClick={() => setEdit(true)}
            >
              <i className="ion-edit"></i>
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDelete(booksData._id)}
            >
              <i className="ion-android-delete"></i>
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};
export default withRouter(Books);
