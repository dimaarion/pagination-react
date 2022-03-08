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
  let limitStep = function (numP, limit) {
    return numP * limit - limit;
  };
  function getClass(a) {
    return document.getElementsByClassName(a);
  }
  function getClassArray(a) {
    return Array.from(document.getElementsByClassName(a));
  }
  function getClassLength(a) {
    return document.getElementsByClassName(a).length;
  }
  useEffect(() => {
    // setNumP(getClassLength("main_menu_cl"));
    setcountMainP(getClassLength("main_menu_cl"));
  }, []);
  useEffect(() => {
    displayList(numP, limit);
  }, [numP]);
  function displayList(numP, limit) {
    getClassArray("main_menu_cl")
      .filter(
        (f, i) =>
          i !== limitStep(numP, limit) || i + 1 !== limitStep(numP, limit)
      )
      .map((x) => x.setAttribute("style", "display:none;"));
    getClassArray("main_menu_cl")
      .filter(
        (f, i) => i <= limitStep(numP, limit) && i > limitStep(numP, limit)
      )
      .map((x) => x.setAttribute("style", "display:flex;"));
  }
  for (let number = 1; number <= itemCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        activeLabel=""
        onClick={(e) => {
          setNumP(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  const paginationBasic = (
    <div className="container">
      {limitStep(numP, limit) + "/" + itemCount}
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта0</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта1</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта2</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта3</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта4</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта5</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта6</a>
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
          <label className="col-sm col-form-label " htmlFor="delete_art_id1">
            <a href="/adminpanel/articles/updateart/1">Виды спорта7</a>
          </label>
        </div>
      </div>
      <Col className="App text-center">{paginationBasic}</Col>
    </div>
  );
}
