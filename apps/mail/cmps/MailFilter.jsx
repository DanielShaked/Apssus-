export class MailFilter extends React.Component {
  state = {
    txt: '',
  };

  handleChange = ({target}) => {
    const txt = target.value;

    this.setState({txt}, () => {
      let newCriteria = this.props.criteria;
      newCriteria.txt = this.state.txt;
      this.props.onSetCriteria(newCriteria);
    });
  };

  render() {
    const {txt} = this.state;
    return (
      // <section className="mail-filter main-layout">
      <div className="mail-filter-search">
        <form>
          <input
            type="text"
            name="search"
            value={txt}
            placeholder="Search for emails here..."
            onChange={this.handleChange}
          />
        </form>
      </div>
      // </section>
    );
  }
}
