import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, FlatList, Text, View } from 'react-native';
import FileItem from './FileItem';

class SmartLibrary extends Component {

    renderItem = (library) =>{
        return <FileItem library={library}/>;
    }
    render() {
        console.log(this.props.libraries);
        return (
                <FlatList
                    data={this.props.libraries}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => (item.id).toString()}
                />
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(SmartLibrary);
