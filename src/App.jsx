import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  // Canom

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?id=10");

    if (!response.ok) throw new Error("Failed to fetch products, canom.");

    const result = await response.json();

    const products = result.products;

    const first10Products = [...products.slice(0, 10)]

    setProducts(first10Products);
  };

  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("Veriler düzgün getirilemedi.");
    }

    const data = await response.json();

    const users = data.results;

    setData(users);
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            {/* users table */}
            <table>
              <thead>
                <th>Picture</th>
                <th>Gender</th>
                <th>Name</th>
                <th>Location</th>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <img src={user.picture.medium} alt={user.name.first} />
                    </td>
                    <td>{user.gender}</td>
                    <td>
                      {user.name.first} {user.name.last}
                    </td>
                    <td>{user.location.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* products table */}

          <div>
            <table>
              <thead>
                <th>Image</th>
                <th>Product</th>
                <th>Brand</th>
                <th>Price</th>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} style={{textAlign: 'center'}}>
                    <td>
                      <img src={product.images[product.images.length - 1]} height={72} alt={product.title} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.brand}</td>
                    <td>{product.price} $</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
