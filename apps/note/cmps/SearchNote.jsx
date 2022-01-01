export class SearchNote extends React.Component{

    state = {
        value: '',
    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }),
            () => this.props.onSetFilter(this.state.value)); 
        
    }

    // onSubmitFilter = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetFilter(this.state.value)
    //     this.cleanForm()
    // }

    cleanForm = () => {
        this.setState({value:''})
    }

    render() {
        
        const { value } = this.state;
        console.log('value:', value);
        
        return (
            <div className="search-container">
                    <input
                        placeholder="Search note..."
                        type="search"
                        name="value"
                        value={value}
                        onChange={this.handleChange} />
                    <i className="fas fa-search"></i>
            </div>
        )
    }

}