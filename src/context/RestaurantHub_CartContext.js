import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [pedidosHistorial, setPedidosHistorial] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (plato) => {
    const existe = carrito.find(item => item.id === plato.id);
    
    if (existe) {
      setCarrito(carrito.map(item =>
        item.id === plato.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...plato, cantidad: 1 }]);
    }
  };

  // Remover del carrito
  const removerDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  // Actualizar cantidad
  const actualizarCantidad = (id, cantidad) => {
    if (cantidad === 0) {
      removerDelCarrito(id);
    } else {
      setCarrito(carrito.map(item =>
        item.id === id ? { ...item, cantidad } : item
      ));
    }
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Confirmar pedido
  const confirmarPedido = () => {
    if (carrito.length === 0) return null;

    const nuevoPedido = {
      id: Math.floor(Math.random() * 10000),
      fecha: new Date().toLocaleDateString('es-ES'),
      hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      items: carrito.map(item => ({
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio
      })),
      total: total,
      estado: 'Preparando',
      tiempoEstimado: Math.min(...carrito.map(item => parseInt(item.preparacion))) + ' min'
    };

    setPedidosHistorial([nuevoPedido, ...pedidosHistorial]);
    setCarrito([]);
    
    return nuevoPedido;
  };

  // Calcular total
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  // Cantidad total de items
  const cantidadItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      removerDelCarrito,
      actualizarCantidad,
      vaciarCarrito,
      confirmarPedido,
      total,
      cantidadItems,
      pedidosHistorial,
      setPedidosHistorial
    }}>
      {children}
    </CartContext.Provider>
  );
};
