import ShoppingBag from "./assets/icons/ShoppingBag";
import ListItem from "./components/ListItem/ListItem";

function App() {
  return (
    <div>
      <header>
        <div>
          <ShoppingBag />
          <h2>Mimi</h2>
        </div>
      </header>

      <nav>
        <ul>
          <ListItem label="Products" />
          <ListItem label="Shopping cart" />
          <ListItem label="Sign in" />
        </ul>
      </nav>
    </div>
  );
}

export default App;
