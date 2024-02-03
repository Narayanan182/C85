import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import db from "../config"
SplashScreen.preventAutoHideAsync();

let customFonts = {
	'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			isEnabled:false,
			light_theme:true,
			name:""
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}
	async FetchUser(){
		let them, name, image;
		const aut = getAuth();
		const userID = auth.currentUser.userID

		onValue(ref()db, "/user/" + userID, (snapshot)=>{
			theme = snapshot.val().current_theme
			this.setState({
				light_theme:theme==="light"?true:false,
				isEnabled_theme:theme==="isEnabled"?true:false,
				name:name
			})
		})
	}

	render() {
		if (this.state.fontsLoaded) {
			SplashScreen.hideAsync();
			return (
				<View style={styles.container}>
					<Text>Profile</Text>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
