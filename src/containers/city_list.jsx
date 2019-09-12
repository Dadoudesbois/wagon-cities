import React, { Component } from 'react';
import City from './city.jsx';
import { bindActionCreators } from 'redux'; import { connect } from 'react-redux'; import { setFlats } from '../actions';

class CityList extends Component {
  function mapDispatchToProps(dispatch) { return bindActionCreators(
    { setCities: setCities },
dispatch );
}

  componentWillMount() {
  // TODO: dispatch an action to load flats!
  }

  render () {
    return (
      <div className="cities">
      { this.props.cities.map(city => {
        return <City city={city} key={city.name} />;
      })}
    </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CityList);

