/*
  * Component Description
*/
import React from "react";
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common/";
import * as Actions from "../actions/";

// interface Library {
//     id: Number;
//     name: String;
//     description: String;
// }

class ListItem extends React.Component {
displayName: "ListItem"

constructor(props) {
super(props);
}

componentWillUpdate() {
  LayoutAnimation.spring();
}

render() {
    const { descriptionContStyle, titleStyle } = styles;
    const { description, id, title } = this.props.library;

  return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>

          {this.props.isExpanded ? (
            <CardSection>
              <Text style={descriptionContStyle}>{description}</Text>
            </CardSection>
          ) : false}
        </View>
      </TouchableWithoutFeedback>
  );
}
}

const styles = {
    descriptionContStyle: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 1
    }
};

const mapStateToProps = (state, ownProps) => {
  const isExpanded = state.selectedLibraryID === ownProps.library.id;
  return {
    isExpanded
  };
};

export default connect(mapStateToProps, Actions)(ListItem);