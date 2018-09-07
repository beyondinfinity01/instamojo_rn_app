import React from 'react';
import { View, Text, WebView } from 'react-native';

export default class Webview extends React.Component {
    render() {
        const { state } = this.props.navigation;
        var url = state.params.url;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <WebView
                    ref="webview"
                    source={{ uri: url }}
                    // onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    // renderLoading={this.renderLoading.bind(this)}
                    onMessage={(event) => console.log(event.nativeEvent.data)} />
            </View>
        );
    }
}