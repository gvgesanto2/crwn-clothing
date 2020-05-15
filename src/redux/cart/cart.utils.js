const findCartItem = (cartItems, itemToFind) => {
  return cartItems.find(cartItem => 
    cartItem.id === itemToFind.id
  );
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findCartItem(cartItems, cartItemToAdd);

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } 

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemId) => {
  return cartItems.filter(cartItem => 
    cartItem.id !== cartItemId
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findCartItem(cartItems, cartItemToRemove);

  if(existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

