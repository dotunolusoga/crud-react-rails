var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    console.log('the name value is ' + name + ' the description value is ' + description);
  },

  render() {
    return (
      <div>
        <h1>New Item</h1>

        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
          <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})
