import './App.css';
import Card from './Components/Card';

const App = () => {

  return (
    <div className="App">
      <h1 className="food_header">Flushing, NY: Restaurant Favorites</h1>
      <table>
        <tbody>
          <tr>
            <td><Card name = "Aria Kabab" type = "Afghan" src = "img/aria_kabab.png" viewSite = "https://www.ariakababmenu.com/?utm_source=gbp"/></td>
            <td><Card name = "Chaat Wala" type = "Indian" src = "img/chaat_wala.png" viewSite = "https://chaatwalanyc.com/"/></td>
            <td><Card name = "Fillmores Tavern" type = "American" src = "img/fillmores_taven.jpg" viewSite = "https://fillmorestavern.com/"/></td>
            <td><Card name = "Five Guys" type = "American" src = "img/five_guys.jpg" viewSite = "https://www.fiveguys.com/"/></td>
            <td><Card name = "Halal Xtreme" type = "Halal" src = "img/halal_extreme.jpg" viewSite = "https://food.google.com/chooseprovider?restaurantId=/g/1q6d1ns7d&g2lbs=ANTchaNH26ll__DG81TSmNJhY88QQ9PHeUiIUpMuB-R9dY3vgFhFgSGBawgjA59jhaNwDXYd1-FUcs9aSyvhW2i2ns55dMA9ZL44zZyDFj2E16O6dIu3z0g3GKOGIHXIlglvDRaq7up-&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=3RAOZbLHKfWg5NoP59SiKA&ei=3RAOZbLHKfWg5NoP59SiKA&fo_s=OA&opi=89978449&orderType=1&sei=CWVJJagSiAa_ETHduBACjdq3&utm_campaign&utm_source=search"/></td>
          </tr>
          <tr>
            <td><Card name = "Qdoba" type = "Mexican" src = "img/qdoba.jpg" viewSite = "https://www.qdoba.com/" /></td>
            <td><Card name = "Melas Restuarant" type = "Dominican" src = "img/melas_restaurant.jpg" viewSite = "https://menupages.com/melas-cafe-restaurant/71-02-kissena-blvd-flushing" /></td>
            <td><Card name = "Sheikh Shack" type = "Halal" src = "img/sheikh_shack.jpg" viewSite = "https://www.clover.com/online-ordering/sheikh-shack-jamaica" /></td>
            <td><Card name = "Sup Thai" type = "Thai" src = "img/sup_thai.jpg" viewSite = "https://www.supthainy.com/" /></td>
            <td><Card name = "Valentino's Pizza" type = "Italian" src = "img/valentinos.jpg" viewSite = "https://www.valentinospizzeriarestaurantmenu.com/?utm_source=gbp"/></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}


export default App;
