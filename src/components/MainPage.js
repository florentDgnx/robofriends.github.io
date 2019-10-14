import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import Header from "./Header";

import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots() {
    return this.props.robots.reduce((res, robot) => {
      if (
        this.props.searchField === "" ||
        robot.name
          .toLowerCase()
          .indexOf(this.props.searchField.toLowerCase()) !== -1
      ) {
        res.push(robot);
      }
      return res;
    }, []);
  }

  render() {
    const { searchField, onSearchChange, isPending } = this.props;

    return isPending ? (
      <h1 className="tc">LOADING</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox
          changeInput={onSearchChange.bind(this)}
          searchField={searchField}
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
