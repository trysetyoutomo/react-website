class Hello extends React.Component{
	render() {
	  return <p>Hello {this.props.name}</p>;
	};
}

ReactDOM.render( <Hello name='World'/>, document.gea