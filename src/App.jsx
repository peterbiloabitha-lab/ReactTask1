
import Product from "./Product";
import "./App.css";

function App() {

  return (
    <div className="container">

      <h1>Our Products</h1>

      <div className="products">

        <Product
          name="Puma Shoes"
          price="$40"
          description="Comfortable sports shoes"
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        />

        <Product
          name="Smart Watch"
          price="$120"
          description="Modern smart watch"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        />

        <Product
          name="Top for Women"
          price="$20"
          description="Stylish blue top"
          image="https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500"
        />


        

      </div>

    </div>
  );
}

export default App;
