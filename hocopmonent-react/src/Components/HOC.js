import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      searchvalue: [],
    };

    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const fetcheddata = await res.json();
        this.setState({ ...this.state, data: fetcheddata });
      };
      fetchData();
    }

    render() {
      let { searchvalue, data } = this.state;
      let filteredData = data.filter((d) => {
            if (entity === "users") {
                const { name } = d;
                return name.indexOf(searchvalue) >= 0;
            }
            if (entity ==="todos") {
                const { title } = d;
                return title.indexOf(searchvalue) >= 0;  
            }
      });
      
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            value={searchvalue}
            placeholder="search "
            onChange={(e) => this.setState({...this.state, searchvalue: e.target.value})}
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;