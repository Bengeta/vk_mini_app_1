import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


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
                <NumberList numbers={this.numbers} setLightOn={this.setLightOn()}/>
                <button onClick={this.setLightOn}>
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
        this.handleSubmit = this.handleSubmit.bind(this);
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
    const listItems = numbers.map((number) =>
        <Button id={number.id.toString()} setLightOn={props.setLightOn}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default App;
