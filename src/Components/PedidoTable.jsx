// src/components/PedidoTable.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const PedidoTable = ({ pedidos, eliminarPedido, editarPedido }) => {
    return (
        <table className="table table-bordered table-hover">
            <thead className="table-dark text-center">
                <tr>
                    <th>Mesa</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {pedidos.length === 0 ? (
                    <tr>
                        <td colSpan="6">No hay pedidos aún.</td>
                    </tr>
                ) : (
                    pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                            <td>{pedido.mesa}</td>
                            <td>{pedido.producto}</td>
                            <td>{pedido.cantidad}</td>
                            <td>${pedido.precio}</td>
                            <td>${pedido.total}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editarPedido(pedido)}
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => eliminarPedido(pedido.id)}
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default PedidoTable;
