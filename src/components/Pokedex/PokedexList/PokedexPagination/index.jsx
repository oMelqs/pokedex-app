import React from "react";
import "./style.css";

const PokedexPagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          className="pagination-button"
          disabled={page === 1}
          //hidden={page === 1 ? "hidden" : false}
          onClick={onLeftClick}
        >
          <img
            alt="Previous"
            className="pagination-button-image"
            src="https://cdn-icons-png.flaticon.com/512/126/126492.png"
          />
        </button>
        <div className="pagination-page-number">
          <h3>{page + "/" + totalPages}</h3>
        </div>
        <button
          className="pagination-button"
          disabled={page === totalPages}
          //hidden={page === totalPages ? "hidden" : false}
          onClick={onRightClick}
        >
          <img
            alt="Next"
            className="pagination-button-image"
            src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
          />
        </button>
      </div>
    </div>
  );
};
export default PokedexPagination;
