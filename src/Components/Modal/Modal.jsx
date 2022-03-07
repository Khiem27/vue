import AppBar from '@mui/material/AppBar';
// Modal Start
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import ProductApi from '../../../Api/Product/ProductApi';


const style = {
    top: '50%',
    left: '50%',
    overflow:'scroll',
    display:'block',
    height: '100%',
   'max-width': '70%',
    width: '100%',
    margin: '1.75rem auto',
    border: 0,
    outline: 'none'
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
// Modal End
  
function ProductsGrid3Column(props) {
    const [products, setProducts] = useState(null)
    const productsSearch = useSelector((state) => state.productSearch.productsSearch)
    const productFilterCategories = useSelector((state) => state.ProductsFilterCategories.productFilterCategories)

    useEffect(() => {
        const getAllProducts = async () => {
            const allProducts = await ProductApi.getAll()
            const getProducts = allProducts.data
            setProducts(getProducts);
            // Search
            if (productsSearch) {
                setProducts(productsSearch)
            }
            // Filter
            if (productFilterCategories) {
                setProducts(productFilterCategories)
            } 
        }
        getAllProducts()

    }, [productsSearch, productFilterCategories])

    // Modal
    const modalValue = useRef(null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = (index) => {
        setOpen(true)
        modalValue.current = index
    };
    const handleClose = () => setOpen(false);

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
    <>
    {/* Modal */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            {
                modalValue.current || modalValue.current === 0 ? 
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-body">
                              <div className="row-modal">
                                  <div class="col-xl-6 col-lg-6 col-lg-6-fix">
                                    <Box sx={{ bgcolor: 'background.paper', width: 500, flexGrow: 1 }}>
                                        <SwipeableViews
                                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                            index={value}
                                            onChangeIndex={handleChangeIndex}
                                        >   
                                            <TabPanel value={value} index={0} dir={theme.direction}>
                                                <div class="product-large-img">
                                                    <img src={products[modalValue.current].image} alt="" />
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel value={value} index={1} dir={theme.direction}>
                                                <div class="product-large-img">
                                                    <img src={products[modalValue.current].navImage} alt="" />
                                                </div>
                                            </TabPanel>
                                            <TabPanel value={value} index={2} dir={theme.direction}>
                                                <div class="product-large-img">
                                                    <img src={products[modalValue.current].hoverImage} alt="" />
                                                </div>
                                            </TabPanel>
                                        </SwipeableViews>
                                        <AppBar position="static">
                                            <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            indicatorColor="secondary"
                                            textColor="inherit"
                                            variant="fullWidth"
                                            aria-label="full width tabs example"
                                            >
                                            <Tab label={<div><img src={products[modalValue.current].image} alt="" /></div>} {...a11yProps(0)} />
                                            <Tab label={<div><img src={products[modalValue.current].navImage} alt="" /></div>} {...a11yProps(1)} />
                                            <Tab label={<div><img src={products[modalValue.current].hoverImage} alt="" /></div>} {...a11yProps(2)} />
                                            </Tabs>
                                        </AppBar>
                                        </Box>
                                  </div>
                                  <div class="col-xl-6 col-lg-6">
                                    <div class="product-details ">
                                        <div class="details-cat mb-10 d-flex align-items-center justify-content-between">
                                            <div> 
                                                <a href="#">{products[modalValue.current].category}</a>
                                            </div>
                                            <i onClick={handleClose} class="fa fa-times modal-icon "></i>
                                        </div>
                                        <h2 class="pro-details-title mb-15 fs-30">{products[modalValue.current].title}</h2>
                                        <div class="details-price mb-10 fs-25">
                                            <span>${products[modalValue.current].price} USD</span>
                                            {
                                                products[modalValue.current].oldPrice ? 
                                                    <span class="old-price">${products[modalValue.current].oldPrice} USD</span>
                                                : null
                                            }
                                        </div>
                                        <div class="product-variant ">
                                            <div class="product-desc variant-item modal-p-15">
                                                <p>{products[modalValue.current].description}
                                                </p>
                                            </div>
                                            <div class="product-info-list variant-item modal-p-15">
                                                <ul>
                                                    <li class="text-capitalize"><span>Brands:</span> {products[modalValue.current].brand}</li>
                                                    <li><span>Product Code:</span> f3</li>
                                                    <li><span>Reward Points:</span> 100</li>
                                                    <li><span>Stock:</span> <span class="in-stock">Out Of Stock</span></li>
                                                </ul>
                                            </div>
                                            <div class="product-action-details variant-item modal-p-15">
                                                <div class="product-details-action d-flex">
                                                    <div class="product-quantity">
                                                        <div class="cart-plus-minus">
                                                            <p>1</p>
                                                            <div class="dec qtybutton">-</div>
                                                            <div class="inc qtybutton">+</div>
                                                        </div>
                                                    </div>
                                                    <button class="active details-action-icon" type="submit">
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                    <button class="details-action-icon" type="submit">
                                                        <i class="fas fa-hourglass"></i>
                                                    </button>
                                                </div>
                                                <div class="details-cart mt-20">
                                                    <button class="btn theme-btn">purchase now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                :null
            }
            </Box>
        </Modal>
    </>
    );
}

export default ProductsGrid3Column;