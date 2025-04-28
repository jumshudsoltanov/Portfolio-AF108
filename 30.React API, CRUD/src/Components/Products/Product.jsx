import React, { useState } from "react";

const Product = ({ products, setProducts }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleDelete = () => {
    const filteredProducts = products.filter((item) => item.id !== deletingProduct.id);
    setProducts(filteredProducts);
    setDeletingProduct(null);
    setIsModalOpen(false); 
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setEditedTitle(product.title);
    setEditedPrice(product.price);
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id
        ? { ...product, title: editedTitle, price: editedPrice }
        : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      title: newTitle,
      price: newPrice,
    };
    setProducts([...products, newProduct]);
    setNewTitle("");
    setNewPrice("");
    setIsAddModalOpen(false);
  };

  return (
    <>
   
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          aria-labelledby="editProductModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editProductModalLabel">
                  Edit Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="editTitle" className="form-label">
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="editTitle"
                    className="form-control"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    placeholder="Enter product title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    id="editPrice"
                    className="form-control"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    placeholder="Enter product price"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          aria-labelledby="addProductModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProductModalLabel">
                  Add New Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsAddModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="newTitle" className="form-label">
                    Product Title
                  </label>
                  <input
                    type="text"
                    id="newTitle"
                    className="form-control"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter product title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    id="newPrice"
                    className="form-control"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="Enter product price"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {deletingProduct && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          aria-labelledby="deleteProductModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteProductModalLabel">
                  Delete Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setDeletingProduct(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this product?</p>
                <p><strong>{deletingProduct.title}</strong></p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDeletingProduct(null)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5">
        <h2 className="mb-4">Product List</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price} $</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => setDeletingProduct(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-success mt-4"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New Product
        </button>
      </div>
    </>
  );
};

export default Product;
