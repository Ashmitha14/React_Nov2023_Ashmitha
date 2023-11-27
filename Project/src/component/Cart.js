// // Cart.js
// import React, { useState } from 'react';
// import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Item 1', price: 20 },
//     { id: 2, name: 'Item 2', price: 30 },
//     // Add more items as needed
//   ]);

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   const handleRemoveItem = (itemId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCart);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom style={{ marginTop: '110px' }}>
//         Shopping Cart
//       </Typography>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
//       <img
//         src="https://images.apollo247.in/images/ic-empty-cart.svg"
//         alt="Centered Image"
//       />
//     </div>
//       {cartItems.length === 0 ? (
//         <Typography variant="body1">Your cart is empty</Typography>
//       ) : (
//         <List>
//           {cartItems.map((item) => (
//             <ListItem key={item.id}>
//               <ListItemText primary={item.name} secondary={`$${item.price}`} />
//               <Button onClick={() => handleRemoveItem(item.id)} variant="outlined" color="secondary">
//                 Remove
//               </Button>
//             </ListItem>
//           ))}
//           <ListItem>
//             <ListItemText primary="Total" />
//             <Typography variant="h6">${getTotalPrice()}</Typography>
//           </ListItem>
//           <ListItem>
//             <Button variant="contained" color="primary">
//               Checkout
//             </Button>
//             <Button variant="contained" color="primary" style={{ marginLeft:'840px' }}>
//               Go to Pharmacy
//             </Button>
//           </ListItem>
//         </List>
//       )}
//     </Container>
//   );
// };

// export default Cart;


// Cart.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: '120px' }}>
        Shopping Cart
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
        <img
          src="https://images.apollo247.in/images/ic-empty-cart.svg"
          alt="Empty Cart"
          style={{ width: '200px', height: '200px' }}
        />
      </div>
        <Typography variant="body1" style={{ marginTop: '20px' }}>Your cart is empty</Typography>
        <List>      
          <ListItem>
            <Button variant="contained" color="primary" style={{ marginLeft: '490px',marginTop: '20px'}} component={RouterLink} to="/home">
              Add Products
            </Button>
          </ListItem>
        </List>
    </Container>
  );
};

export default Cart;
