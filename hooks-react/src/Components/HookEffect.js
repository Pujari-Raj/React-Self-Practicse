import React, { useEffect, useState } from 'react'

const HookEffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    /* Before useEffect hook we used to write a very long code */
    /*
class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log('Updating document title')
			document.title = `Clicked ${this.state.count} times`
		}
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click {this.state.count} times
				</button>
			</div>
		)
	}
}

     */
    /*  After useEffect  Hook was introduced in react it was vsed with functional 
    Component and code is very shorter,
    The array at line-50 is known as dependency array on which the effect depends on
    if the value for the given array (count) is changed then only effect happens
    */
    useEffect(() => {
        console.log('useEffect - updating document title');
        document.title = `Clicked - ${count} times`;
    }, [count]);

  return (
    <div>
        <input placeholder='enter name' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>Clicked - {count} times</button>
    </div>
  )
}

export default HookEffect