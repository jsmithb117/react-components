var GroceryList = (props) => (
  <ul>
    {props.items.map((item) =>
    <GroceryListItem item={item} />
    )}
  </ul>

);

class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  onListItemMouseOver() {
    this.setState({
      completed: !this.state.completed
    })
  }

  onListItemMouseOut() {
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {
    var style= {
      fontWeight: this.state.completed ? 'bold' : 'normal'
    }
    return (
        <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)} onMouseOut={this.onListItemMouseOut.bind(this)}> {this.props.item} </li>
      )
  }
};

var groceryList = ['Granulated Sugar', 'Brown Sugar', 'Salt', 'Unsalted Butter', 'Eggs', 'Vanilla Extract', 'Flour', 'Baking Soda', 'Milk Chocolate Chunks'];
ReactDOM.render(<GroceryList items={groceryList} />, document.getElementById('app'));