import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {number} from "prop-types";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lightOn: false};

        this.setLightOn = this.setLightOn.bind(this);
        this.turnOnLight = this.turnOnLight.bind(this);
    }

    numbers = {"0": false, "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false}

    isUsed = false;

    setLightOn(id) {
        this.numbers[id] = !this.numbers[id];
    }

    turnOnLight() {
        while (this.isUsed)
            for (let i = 0; i < this.numbers.length; i++) {
                if (this.numbers[i]) {
                    bridge.send("VKWebAppFlashSetLevel", {"level": 1});
                    setTimeout(() => {
                    }, 1000);
                } else {
                    bridge.send("VKWebAppFlashSetLevel", {"level": 0});
                    setTimeout(() => {
                    }, 1000);
                }
                i %= this.numbers.length;
            }
    }

    render() {
        return (
            <div>
                {/*<NumberList numbers={this.numbers} setLightOn={this.setLightOn}/>*/}
                <button setLightOn={this.setLightOn} turnOn={this.numbers["1"]} id={"1"}>this.numbers["1"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["2"]} id={"2"}>this.numbers["2"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["3"]} id={"3"}>this.numbers["3"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["4"]} id={"4"}>this.numbers["4"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["5"]} id={"5"}>this.numbers["5"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["6"]} id={"6"}>this.numbers["6"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["7"]} id={"7"}>this.numbers["7"]</button>
                <button setLightOn={this.setLightOn} turnOn={this.numbers["8"]} id={"8"}>this.numbers["8"]</button>



                <button onClick={this.turnOnLight}>
                    {this.state.turnOn ? "on" : "off"}
                </button>
            </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {turnOn: props.turnOn};
        this.id = this.props.id
        this.setLightOn = this.setLightOn.bind(this);
    }

    setLightOn() {
        this.props.setLightOn({id});
        this.setState(prevState => ({
            turnOn: !prevState.turnOn
        }));
    }

    render() {
        return (
            <button onClick={this.setLightOn}>
                {this.state.turnOn ? "on" : "off"}
            </button>
        );
    }
}


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = Object.entries(numbers).map((number) => <Button turnOn={number.key} id={number.value} setLightOn={props.setLightOn}/>

    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default App;
