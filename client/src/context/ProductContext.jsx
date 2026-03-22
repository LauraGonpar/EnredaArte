import { createContext, useState } from "react"; 
import AroDoble from "../assets/img/aroDoble.png";
import Margarita from "../assets/img/margaritaverdea.png";
import Carola from "../assets/img/carola.png";
import Duales from "../assets/img/duales.png";
import Gala from "../assets/img/gala.png";
import Eslabon from "../assets/img/eslabones.png";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const imagenesMapa = {
    1: AroDoble,
    2: Margarita,
    3: Carola,
    4: Duales,
    5: Gala,
    6: Eslabon
  };

    const [products] = useState([
  {
    id: 1,
    nombre: "Aro doble",
    descripcion: "Elegante diseño de aros dobles con cristales en tono turquesa.",
    precio: 3500, 
    rango_precio: "$3.500 - $4.500",
    stock: 10,
    imagen_url: "../assets/img/aroDoble.png"
  },
  {
    id: 2,
    nombre: "Margarita",
    descripcion: "Delicados aros circulares con detalles en verde cristalino.",
    precio: 3500,
    rango_precio: "$3.500 - $4.500",
    stock: 8,
    imagen_url: "../assets/img/margaritaverdea.png"
  },
  {
    id: 3,
    nombre: "Carola",
    descripcion: "Aros tipo botón con diseño de nudo dorado artesanal.",
    precio: 3500,
    rango_precio: "$3.500 - $4.500",
    stock: 5,
    imagen_url: "../assets/img/carola.png"
  },
  {
    id: 4,
    nombre: "Duales",
    descripcion: "Combinación de texturas cuadradas y flores en tono lila.",
    precio: 3500,
    rango_precio: "$3.500 - $4.500",
    stock: 12,
    imagen_url: "../assets/img/duales.png"
  },
  {
    id: 5,
    nombre: "Gala",
    descripcion: "Aros sofisticados con base de rosa dorada y cristales negros.",
    precio: 3500,
    rango_precio: "$3.500 - $4.500",
    stock: 6,
    imagen_url: "../assets/img/gala.png"
  },
  {
    id: 6,
    nombre: "Eslabón",
    descripcion: "Pulsera de cadena hecha a mano con acabado envejecido.",
    precio: 4500,
    rango_precio: "$4.500",
    stock: 4,
    imagen_url: "../assets/img/eslabones.png"
  }
]);

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState({
    id: 1,
    nombre: "Coni L.",
    email: "usuario@gmail.com",
    role: "user" 
  });

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, cantidad: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const completePurchase = () => {
    setCart([]);
  };

const toggleFavorite = (product) => {
  setFavorites((prev) => {
    const isFav = prev.some((fav) => fav.id === product.id);
    if (isFav) {
      return prev.filter((fav) => fav.id !== product.id);
    } else {
      return [...prev, product]; 
    }
  });
};

  const globalState = {
    products,
    cart,
    favorites,
    user,
    setUser,
    addToCart,
    removeFromCart,
    imagenesMapa,
    updateQuantity,
    cartTotal,
    completePurchase,
    toggleFavorite
  };

  return (
    <ProductContext.Provider value={globalState}>
      {children}
    </ProductContext.Provider>
  );
};