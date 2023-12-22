import { Link } from 'react-router-dom';
import React from 'react';
import style from '../styles/dashboard.module.css';
import styles from '../styles/productCard.module.css';
import ProductCard from '../productCard';

import { useState, useEffect } from 'react';

function AdminDashboard() {
  //fetch db data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  //fetch for filter
  const [selectedOption, setSelectedOption] = useState(null);
  //fetch for editing
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingCategoryName, setEditingCategoryName] = useState('');
  //fetch for adding
  const [addingCategoryName, setAddingCategoryName] = useState('');


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching products:', error));

    fetch('http://127.0.0.1:8000/api/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
      .catch(error => console.error('Error fetching categories:', error));

    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  
  const handleEditClick = (categoryId, categoryName) => {
    setEditingCategoryId(categoryId);
    setEditingCategoryName(categoryName);
  };

  const handleAddClick = () => {
    setAddingCategoryName('');
  }
  
  const handleCancelEdit = () => {
    setEditingCategoryId(null);
    setEditingCategoryName('');
  }

  const handleCancelAdd = () => {
    setAddingCategoryName(null);
  }
  
  const handleClick = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
    setEditingCategoryId(null);
    setEditingCategoryName('');
    setAddingCategoryName('');
  }

  const handleDeleteClick = async (categoryId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/categories/${categoryId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Category deleted successfully');
        fetchCategories();
      } else {
        console.error('Error deleting category:', response.status);
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  //edit modal
  const handleConfirmEdit = () => {
    if (editingCategoryId && editingCategoryName) {
      fetch(`http://127.0.0.1:8000/api/categories/${editingCategoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editingCategoryName }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Category updated successfully:', data);
          fetchCategories();
          setEditingCategoryId(null);
          setEditingCategoryName('');
        })
        .catch((error) => {
          console.error('Error updating category:', error);
        });
    } else {
      console.error('Invalid category ID or name');
    }
  }

  const handleAdd = () => {
    if(addingCategoryName) {
      fetch('http://127.0.0.1:8000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: addingCategoryName }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Category added successfully:', data);
          fetchCategories();
          setAddingCategoryName('');
        })
        .catch((error) => {
          console.error('Error adding category:', error);
        })
    } else {
      console.error('Invalid category name');
    }
  }

  const productList = products.map((product) => {
    const textColor = product.availability === 'In Stock' ? '#27ae60' : 'red';
    return (
      <Link
        to={`/products/${product.id}/${product.category_id}`} key={product.id} className={style.product_link}>
        <ProductCard
          description={product.description}
          price={product.price}
          availability={product.availability}
          image={product.img_url}
          textColor={textColor}
        />
      </Link>
    );
  });

  //fetch categories list
  const categoryList = categories.map((category) => (
    <tr key={category.id}>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>
        <button onClick={() => handleEditClick(category.id, category.name)}>Edit</button>
        <button onClick={() => handleDeleteClick(category.id)}>Delete</button>
      </td>
    </tr>
  ));

  //call edit modal
  const modal = editingCategoryId && (
    <div className="modal">
      <div className="modal_content">
        <h2>Edit Category</h2>
        <input
          type="text"
          value={editingCategoryName}
          onChange={(e) => setEditingCategoryName(e.target.value)}
        />
        <button onClick={handleConfirmEdit}>Confirm</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </div>
    </div>
  );

  const addButton = (
    <button onClick={handleAddClick}>Add New Category</button>
  )
  const addModal = addingCategoryName && (
    <div className="modal">
      <div className="modal_content">
        <h2>Add New Category</h2>
        <input
          type="text"
          value={addingCategoryName}
          onChange={(e) => setAddingCategoryName(e.target.value)}
        />
        <button onClick={handleAdd}>Confirm</button>
        <button onClick={handleCancelAdd}>Cancel</button>
      </div>
    </div>
  );


  return (
    <>
      <body>
        <nav>
            <div>
            <a href="#" onClick={() => window.location.href = 'http://127.0.0.1:8000/home'}>Home</a>
            </div>
            <div>
                <div className={style.dropdown}>
                    <span>Username</span>
                    <div className={style.dropdown_content}>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
        <main className={style.container}>
          <div className={style.sidebar}>
            <ul>
                <li>
                  <a href="#" onClick={() => handleClick('Products')}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleClick('Categories')}>
                    Categories
                  </a>
                </li>
            </ul>
          </div>
          <div className={style.workspace}>
            {selectedOption === 'Products' && (
              <div className={style.product_section}>
                <h1>Products</h1>
                <div className={style.product_grid}>{productList}</div>
              </div>
            )}
            {selectedOption === 'Categories' && (
              <>
                <h1>Categories</h1>
                <table className={style.categoryTable}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryList}
                  </tbody>
                </table>
                {addButton}
                {addModal}
                {modal}
              </>
            )}
          </div>
        </main>
      </body>
    </>
  );
}

export default AdminDashboard;