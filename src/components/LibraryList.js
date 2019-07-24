/*
  * Component Description
*/
import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import ListItem from "./ListItem";


class libraryList extends React.Component {
displayName: "libraryList"

constructor(props) {
super(props);

this.renderItem = this.renderItem.bind(this)
}

render() {
  return <FlatList
    data={this.props.libraries}
    renderItem={this.renderItem}
    keyExtractor={(library) => library.id}
  />;
}

    renderItem(itemProps) {
        return (
            <ListItem library={itemProps.item} />
        );
    }
};

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
};

export default connect(mapStateToProps)(libraryList);