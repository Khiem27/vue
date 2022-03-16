import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFromLocal, addToCompare } from './AddToCompareSlice';

AddToCompare.propTypes = {};

function AddToCompare(props) {
    const { dataProduct } = props;
    const dispatch = useDispatch();
  
    const [active, setActive] = useState(false);
    const compareItemSlice = useSelector(
      (state) => state.addToCompare.products
    );
    const compareLocal = localStorage.getItem("compareProduct");
    useEffect(() => {
      const compareData = JSON.parse(compareLocal);
  
      if (compareData) {
        const action = addFromLocal(compareData);
        dispatch(action);
      }
    }, [dispatch, compareLocal]);
  
    useEffect(() => {
      // eslint-disable-next-line array-callback-return
      compareItemSlice.map((item) => {
        if (dataProduct.id === item.id) {
          setActive(true);
        }
      });
    }, [dataProduct.id, compareItemSlice]);
  
  const clickCompare = () => {
    if (dataProduct) {
      const action = addToCompare(dataProduct);
      dispatch(action);
      setActive(!active);
    }
  };

  return (
    <Link to="#" className={active ? "active" : " "} onClick={clickCompare}>
      <i className="fas fa-compress-alt"></i>
    </Link>
  );
}

export default AddToCompare;
