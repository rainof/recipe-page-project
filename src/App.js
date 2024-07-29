import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import food_img from './assets/images/image-omelette.jpeg';

function App() {
  return (
    <div className="card" style={{width: '46.5rem'}}>
      <div className="overview">
        <img className="overview-img" src={food_img} alt="Omelette" />
        <h1 className="overview-title">Simple Omelette Recipe</h1>
        <p className="overview-description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>

      <div className="pink-box">
        <h5 className="pink-box-title">Preparation time</h5>
        <ul className="pink-unorder-list">
          <li><strong>Total</strong>: Approximately 10 minutes</li>
          <li><strong>Preparation</strong>: 5 minutes</li>
          <li><strong>Cooking</strong>: 5 minutes</li>
        </ul>
      </div>

      <div className="detail-box">
        <h2 className="detail-box-title">Ingredients</h2>
        <ul className="unorder-list">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>

      <hr className="section-separator"></hr>

      <div className="detail-box">
        <h2 className="detail-box-title">Instructions</h2>
        <ol className="order-list">
          <li>
            <p>
              <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </p>
          </li>
          <li>
            <p>
              <strong>Heat the pan</strong>: Place a non-stick frying pan over medium heat and add butter or oil.
            </p>
          </li>
          <li>
            <p>
              <strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </p>
          </li>
          <li>
            <p>
              <strong>Add fillings (optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </p>
          </li>
          <li>
            <p>
              <strong>Fold and serve</strong>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </p>
          </li>
          <li>
            <p>
              <strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.
            </p>
          </li>
        </ol>
      </div>

      <hr className="section-separator"></hr>

      <div className="detail-box">
        <h2 className="detail-box-title">Nutrition</h2>
        <p className="table-description">The table below shows nutritional values per serving without the additional fillings.</p>
        <table className="detail-box-table">
          <tr>
            <th className="table-attribute">Calories</th>
            <th className="table-value">277kcal</th>
          </tr>
          <tr>
            <th className="table-attribute">Carbs</th>
            <th className="table-value">0g</th>
          </tr>
          <tr>
            <th className="table-attribute">Protein</th>
            <th className="table-value">20g</th>
          </tr>
          <tr>
            <th className="table-attribute">Fat</th>
            <th className="table-value">22g</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;