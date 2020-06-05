import React from 'react';
import { FlatList, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

import * as cartActions from '../../store/actions/cart';


const ProductsOverviewScreen = ({navigation}) => {
  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Cart" 
          onPress={() => {navigation.navigate('Cart')}} />
        ),
      });
    }, [navigation]);

  console.log("overview screen");
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => 
      	<ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
          	navigation.navigate("ProductDetail",
          	{
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
