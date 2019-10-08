import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager, Animated } from 'react-native';
import { CardSection } from './common/index';
import * as action from '../actions';
import { connect } from 'react-redux';

class FileItem extends Component {

    componentDidMount = () =>{
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentDidUpdate = () => {
        LayoutAnimation.spring();
    }
    render() {
        const { title, id, description } = this.props.library.item;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View style={{ flex: 1, paddingHorizontal:15, paddingVertical:5 }}>
                    <CardSection>
                        <Text style={[this.props.expandable && {color:'#0f0'}]}>{title}</Text>
                    </CardSection>
                    {this.props.expandable && 
                        <CardSection>
                            <Text style={{flex:1}}>{description}</Text>                    
                        </CardSection>
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expandable = state.selectedId === ownProps.library.item.id;

    return { expandable };
}

export default connect(mapStateToProps, action)(FileItem);