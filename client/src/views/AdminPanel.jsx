import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const { products, setProducts, imagenesMapa } = useContext(ProductContext);
  const [tab, setTab] = useState("inventario");

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    stock: "",
    categoria: "Aros",
  });

  const usuarios = [
    { id: 1, nombre: "Laura Gonzalez", email: "laura@mail.com", rol: "Admin" },
    { id: 2, nombre: "Coni L.", email: "coni@mail.com", rol: "User" },
  ];

  const handleInputChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };

  const agregarProducto = (e) => {
    e.preventDefault();

    const nuevoId = products.length + 1;
    const productoFinal = {
      ...nuevoProducto,
      id: nuevoId,
      precio: Number(nuevoProducto.precio),
      stock: Number(nuevoProducto.stock),
      rango_precio: `$${Number(nuevoProducto.precio).toLocaleString("es-CL")}`,
    };

    setProducts([...products, productoFinal]);

    setNuevoProducto({
      nombre: "",
      precio: "",
      descripcion: "",
      stock: "",
      categoria: "Aros",
    });

    Swal.fire({
      title: "¡Joya Agregada!",
      text: `${productoFinal.nombre} ya está disponible en la tienda.`,
      icon: "success",
      confirmButtonColor: "#b38e6d",
    });
  };

  return (
    <div className="container-fluid bg-light pt-5 mt-5 min-vh-100 px-lg-5">
      <div className="row">
        <div className="col-md-3 col-lg-2 mb-4">
          <div
            className="card border-0 shadow-sm p-3 sticky-top"
            style={{ top: "100px" }}
          >
            <h5 className="fw-bold text-enredarte-red mb-4 text-center">
              Panel EnredaArte
            </h5>
            <div className="nav flex-column nav-pills">
              <button
                className={`nav-link mb-2 text-start ${tab === "inventario" ? "active bg-brown" : "text-dark"}`}
                onClick={() => setTab("inventario")}
              >
                📦 Inventario
              </button>
              <button
                className={`nav-link mb-2 text-start ${tab === "usuarios" ? "active bg-brown" : "text-dark"}`}
                onClick={() => setTab("usuarios")}
              >
                👥 Usuarios
              </button>
              <button
                className={`nav-link mb-2 text-start ${tab === "ventas" ? "active bg-brown" : "text-dark"}`}
                onClick={() => setTab("ventas")}
              >
                💰 Ventas
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-9 col-lg-10">
          <div className="card border-0 shadow-sm p-4 bg-white mb-5">
            {tab === "inventario" && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold text-dark m-0">
                    Gestión de Productos
                  </h4>
                  <button
                    className="btn btn-brown text-white fw-bold shadow-sm"
                    data-bs-toggle="collapse"
                    data-bs-target="#formNuevoProducto"
                  >
                    + Nueva Joya
                  </button>
                </div>

                <div className="collapse mb-5" id="formNuevoProducto">
                  <div className="card card-body border-0 bg-enredarte-cream shadow-sm p-4">
                    <h6 className="fw-bold mb-3">Detalles de la nueva pieza</h6>
                    <form onSubmit={agregarProducto} className="row g-3">
                      <div className="col-md-6">
                        <label className="small fw-bold">Nombre</label>
                        <input
                          type="text"
                          name="nombre"
                          className="form-control"
                          value={nuevoProducto.nombre}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="small fw-bold">Precio ($)</label>
                        <input
                          type="number"
                          name="precio"
                          className="form-control"
                          value={nuevoProducto.precio}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="small fw-bold">Stock Inicial</label>
                        <input
                          type="number"
                          name="stock"
                          className="form-control"
                          value={nuevoProducto.stock}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="small fw-bold">
                          Descripción Artesanal
                        </label>
                        <textarea
                          name="descripcion"
                          className="form-control"
                          rows="2"
                          value={nuevoProducto.descripcion}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 text-end">
                        <button
                          type="submit"
                          className="btn btn-dark px-5 fw-bold"
                        >
                          Guardar Producto
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Joya</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th className="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id}>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src={imagenesMapa[p.id]}
                                alt={p.nombre}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                  borderRadius: "6px",
                                }}
                              />
                              <span className="fw-bold small">{p.nombre}</span>
                            </div>
                          </td>
                          <td>${p.precio.toLocaleString("es-CL")}</td>
                          <td>
                            <span
                              className={`badge ${p.stock < 5 ? "bg-danger" : "bg-success"}`}
                            >
                              {p.stock} unidades
                            </span>
                          </td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-outline-secondary me-2">
                              Editar
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tab === "usuarios" && (
              <div>
                <h4 className="fw-bold mb-4">Comunidad EnredaArte</h4>
                <div className="row g-3">
                  {usuarios.map((u) => (
                    <div key={u.id} className="col-md-6">
                      <div className="p-3 border rounded d-flex justify-content-between align-items-center bg-white">
                        <div>
                          <p className="mb-0 fw-bold">{u.nombre}</p>
                          <small className="text-muted">{u.email}</small>
                        </div>
                        <span
                          className={`badge ${u.rol === "Admin" ? "bg-dark" : "bg-secondary"}`}
                        >
                          {u.rol}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "ventas" && (
              <div>
                <h4 className="fw-bold mb-4">Reporte de Ventas</h4>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-4 border-0 rounded bg-enredarte-cream shadow-sm">
                      <p className="small mb-1 text-muted">Ingresos Totales</p>
                      <h2 className="fw-bold text-dark text-enredarte-red">
                        $250.000
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 border-0 rounded bg-enredarte-cream shadow-sm">
                      <p className="small mb-1 text-muted">
                        Pedidos Completados
                      </p>
                      <h2 className="fw-bold text-dark text-enredarte-red">
                        48
                      </h2>
                    </div>
                  </div>
                </div>
                <h6 className="fw-bold border-bottom pb-2">
                  Últimas Transacciones
                </h6>
                <div className="small text-muted py-2">
                  Orden #0045 - Laura Gonzalez - $14.000
                </div>
                <div className="small text-muted py-2 border-top">
                  Orden #0044 - Coni L. - $3.500
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
