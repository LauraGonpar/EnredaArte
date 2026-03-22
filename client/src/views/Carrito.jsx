import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useContext(ProductContext);
const navigate = useNavigate();
  const handleFinalizarCompra = () => {
    if (cart.length === 0) {
      Swal.fire("Carrito vacío", "Agrega algunos productos antes de comprar", "warning");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tu Carrito de Compras 🧶</h2>
      
      <div className="row">
        <div className="col-lg-8">
          {cart.length === 0 ? (
            <div className="alert alert-light border shadow-sm p-5 text-center">
              <h4>Tu carrito está vacío</h4>
              <p>¡Nuestras joyas de alambrismo te están esperando!</p>
            </div>
          ) : (
            <div className="card shadow-sm">
              <ul className="list-group list-group-flush">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item py-3">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <img src={item.imagen_url} alt={item.nombre} className="img-fluid rounded" />
                      </div>
                      <div className="col-4">
                        <h6 className="mb-0">{item.nombre}</h6>
                        <small className="text-muted">Color: {item.color}</small>
                      </div>
                      <div className="col-3 d-flex align-items-center">
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.cantidad - 1))}
                        > - </button>
                        <span className="mx-3 fw-bold">{item.cantidad}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, Math.min(item.stock, item.cantidad + 1))}
                        > + </button>
                      </div>
                      <div className="col-2 text-end">
                        <span className="fw-bold">${(item.precio * item.cantidad).toLocaleString()}</span>
                      </div>
                      <div className="col-1">
                        <button 
                          className="btn btn-link text-danger p-0"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-warning">
            <div className="card-body">
              <h5 className="card-title mb-4">Resumen de Compra</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-4 border-top pt-2">
                <span className="fw-bold fs-5">Total</span>
                <span className="fw-bold fs-5 text-warning">${cartTotal.toLocaleString()}</span>
              </div>
              <button 
                className="btn btn-warning w-100 fw-bold"
                onClick={handleFinalizarCompra}
              >
                PAGAR AHORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;