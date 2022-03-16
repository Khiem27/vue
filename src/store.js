import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "./Components/AddToCart/AddToCartSlice";
import AddToConpareSlice from "./Components/AddToCompare/AddToCompareSlice";
import AddToWishlistSlice from "./Components/AddToWishlist/AddToWishlistSlice";
import { LoginSlice } from "./Components/Authentication/Login/LoginSlice";
import { RegisterSlice } from "./Components/Authentication/Register/RegisterSlice";
import { ModalSlice } from "./Components/Modal/ModalSlice";
import FilterBrandSlice from "./Components/ProductsBrandFilter/ProductsBrandFilterSlice";
import FilterCategoriesSlice from "./Components/ProductsCategoriesFilter/ProductsFilterCategoriesSlice";
import FilterColorSlice from "./Components/ProductsColorFilter/ProductsColorFilterSlice";
import ProductsFilterSizeSlice from "./Components/ProductsSizeFilter/ProductsSizeFilterSlice";
import FilterTagsSlice from "./Components/ProductsTagsFilter/ProductsTagsFilterSlice";
import ProductSearchSlice from "./Components/Search/ProductSearchSlice";
import ShopNavSlice from "./Components/ShopNav/ShopNavSlice";
import ShowingResultSlice from "./Components/Showing/ShowingResultSlice";

const rootReducers = {
  shopNav: ShopNavSlice,
  productSearch: ProductSearchSlice,
  modal: ModalSlice,
  filterCategory: FilterCategoriesSlice,
  filterBrand: FilterBrandSlice,
  filterSize: ProductsFilterSizeSlice,
  filterTags: FilterTagsSlice,
  filterColor: FilterColorSlice,
  addToCart: AddToCartSlice,
  addToWishlist: AddToWishlistSlice,
  addToCompare: AddToConpareSlice,
  showingResult: ShowingResultSlice,
  login: LoginSlice,
  register: RegisterSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});
