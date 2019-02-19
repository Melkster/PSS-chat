import React from "react";
import {
    Keyboard, TouchableHighlight, View,
    Text, TextInput, FlatList, KeyboardAvoidingView, Picker
} from "react-native";
import styles from './styles';
import chatRoomsList from './ChatRoomsList';

class CreateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatRoomName: '',
            chatID: 'TEST0001', // This should be the hashcode.
        }
    }

    onSubmitButtonPressed() {
        const { navigation } = this.props;
        const state = navigation.getParam('currentState', 'unknown');

        if (this.state.chatRoomName.length != 0) {
            const chatRoom = {
                name: this.state.chatRoomName,
                ChatID: this.state.chatID,
            }
            chatRoomsList.push(chatRoom);
            this.setState((prevState) => {
                return {chatRoomName: ''};
            });
            this.textInput.clear();
            Keyboard.dismiss();
            this.props.navigation.navigate('Chatroom', {
                name: state.name,
                chatId: this.state.chatID,
                chatName: this.state.chatRoomName,
            })
        } else {
            Keyboard.dismiss();
        }
    }

    render() {
        return (
            <View style={styles.createScreenView}>
                <TextInput
                    style={styles.chatRoomName}
                    placeholder="Enter Chatroom Name"
                    onChangeText={(text) => this.setState({chatRoomName: text})}
                    ref={input => {this.textInput = input;}}
                />

                <TouchableHighlight
                    style={styles.chatRoomNameSubmit}
                    onPress={this.onSubmitButtonPressed.bind(this)}
                >
                    <Text style={{color: 'white'}}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default CreateScreen;