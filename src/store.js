import { configureStore } from '@reduxjs/toolkit';
import ShopNavSlice from './Components/ShopNav/ShopNavSlice';
import ProductSearchSlice from './Components/Search/ProductSearchSlice';
import { ModalSlice } from './Components/Modal/ModalSlice';
import FilterCategoriesSlice from './Components/ProductsCategoriesFilter/ProductsFilterCategoriesSlice';
import FilterBrandSlice from './Components/ProductsBrandFilter/ProductsBrandFilterSlice';
import ProductsFilterSizeSlice from './Components/ProductsSizeFilter/ProductsSizeFilterSlice';
import FilterTagsSlice from './Components/ProductsTagsFilter/ProductsTagsFilterSlice';
import FilterColorSlice from './Components/ProductsColorFilter/ProductsColorFilterSlice';
import AddToCartSlice from './Components/AddToCart/AddToCartSlice';
import ShowingResultSlice from './Components/Showing/ShowingResultSlice';

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
  showingResult: ShowingResultSlice,

}

export const store = configureStore({
  reducer: rootReducers,
})