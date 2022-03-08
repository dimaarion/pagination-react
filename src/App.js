import { useState, useEffect } from "react";
import "./styles.css";
import "./css/bootstrap.css";
import { Col, Pagination } from "react-bootstrap";

export default function App() {
  const [numP, setNumP] = useState(1);
  const [countMainP, setcountMainP] = useState(0);
  let active = numP;
  let items = [];
  let limit = 2;
  let itemCount = countMainP / limit;
  useEffect(() => {
    let main_menu_cl_count = document.getElementsByClassName("main_menu_cl")
      .length;
    setcountMainP(main_menu_cl_count);
    let main_menu_cl = document.getElementsByClassName("main_menu_cl");
    main_menu_cl = Array.from(main_menu_cl);
    main_menu_cl.map((x, i) =>
      i < limit
        ? x.setAttribute("style", "display:flex;")
        : x.setAttribute("style", "display:none")
    );
  }, []);
  for (let number = 1; number <= itemCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        activeLabel=""
        onClick={(e) => {
          setNumP(number);
          let main_menu_cl = document.getElementsByClassName("main_menu_cl");
          main_menu_cl = Array.from(main_menu_cl);
          main_menu_cl.filter();
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  const paginationBasic = (
    <div className="container">
      {numP * limit - limit + "/" + countMainP / limit}
      <Pagination className="justify-content-center">{items}</Pagination>
    </div>
  );
  return (
    <div>
      <div id="articles">
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
        <div className="main_menu_cl row">
          <input
            value="1"
            className="form-control col-1"
            type="checkbox"
            name="delete_art_id[]"
            id="delete_art_id1"
          />
          <label className="col-sm col-form-label " for="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта</a>
          </label>
        </div>
      </div>
      <Col className="App text-center">{paginationBasic}</Col>
    </div>
  );
}
