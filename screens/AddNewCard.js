import React, {Component} from 'react';
import {
    Image,
    View, ScrollView, TextInput
} from 'react-native';
import {Icon, Text, Button, Left, Right, ListItem, Radio} from 'native-base';


import styles from "../styles/style";

class AddNewCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkbox1: false,
        };
    }
    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1
        });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#231F20'}}>
                <View style={[styles.rowed, {marginTop: 10}]}>
                    <Button transparent style={{paddingBottom: 4}}>
                        <Icon name="ios-arrow-dropleft-circle-outline" style={{fontSize: 30, color: '#AF7D04'}}/>
                    </Button>
                    <Text style={[styles.movieTitle]}>Add New Card</Text>
                    <View></View>
                    <View></View>
                </View>

                <View style={{marginVertical: 20}}>
                </View>
                <View style={styles.addCard}>
                    <Text style={styles.subTitle}>Card Number</Text>
                    <TextInput style={styles.cardInput}
                               placeholder="**** **** **** ****"
                               placeholderTextColor="#5a5355"
                               selectionColor="#AF7D04"
                               keyboardType="phone-pad"/>
                    <View style={styles.rowed}>
                        <Image style={{width: 70, height: 35}}
                               source={require('../assets/img/payments/verve.png')} resizeMode="contain"/>

                        <View>
                            <Text style={styles.subTitle}>Expiry Date</Text>
                            <DatePicker
                                defaultDate={new Date(2020, 4)}
                                minimumDate={new Date(2018, 1)}
                                maximumDate={new Date(2030, 12)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="MM/YY"
                                textStyle={{color: "#231F20", padding: 0, paddingVertical: 10, fontSize: 14}}
                                placeHolderTextStyle={{color: "#231F20", padding: 0, paddingVertical: 10, fontSize: 14}}
                                onDateChange={this.setDate}
                            />
                        </View>
                        <View>
                            <Text style={styles.subTitle}>CVV</Text>
                            <TextInput style={styles.cvvInput}
                                       placeholder="- - -"
                                       placeholderTextColor="#5a5355"
                                       selectionColor="#AF7D04"
                                       keyboardType="phone-pad"/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Card Holder</Text>
                        <TextInput style={styles.holderInput}
                                   placeholder="- - -"
                                   placeholderTextColor="#5a5355"
                                   selectionColor="#AF7D04"
                                   autoCapitalize="characters"/>
                    </View>
                </View>

                <ListItem noBorder button onPress={() => this.toggleSwitch1()}>
                    <CheckBox
                        color="#EEE6D9"
                        checked={this.state.checkbox1}
                        onPress={() => this.toggleSwitch1()}
                    />
                    <Text style={styles.saveLaterText}>SAVE FOR LATER TRANSACTION</Text>
                </ListItem>

                <Button block iconLeft
                        style={[styles.primaryButton, {marginTop: 20, marginHorizontal: 10, borderRadius: 0}]}>
                    <Text style={styles.buttonText}>ACCEPT & CONTINUE</Text>
                    <Icon name='ios-card' style={{fontSize: 30, color: '#EEE6D9'}}/>
                </Button>


            </View>
        );
    }
}

export default AddNewCard;