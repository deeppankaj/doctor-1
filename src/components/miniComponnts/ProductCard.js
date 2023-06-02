import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ProductCard = ({ product }) => {
  const { name, price, qty, img } = product;
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
        <div className="card shop-list border-0">
          <div className="shop-image position-relative overflow-hidden rounded shadow">
            <ul className="list-unstyled shop-icons position-absolute p-2">
              <li>
                <button className="btn btn-icon btn-pills bg-soft-danger">
                  <BsHeart />
                </button>
              </li>
              <li className="mt-2">
                <button className="btn btn-icon btn-pills bg-soft-primary">
                  <FiEye />
                </button>
              </li>
              <li className="mt-2">
                <button className="btn btn-icon btn-pills bg-soft-warning">
                  <RiShoppingCartLine />
                </button>
              </li>
            </ul>

            <a href="pharmacy-product-detail.html">
              <img src={img} className="img-fluid" alt="" />
            </a>
          </div>
          <div className="card-body content pt-4 p-2">
            <Link to={"/"} className="text-dark product-name h6">
              {name}
            </Link>
            <div className="d-flex justify-content-between mt-1">
              <h6 className="text-muted small font-italic mb-0 mt-1">
                {price} <TbCurrencyRupee />
              </h6>
              <ReactStars count={5} value={4} color2="#f1b561" color1="grey" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
