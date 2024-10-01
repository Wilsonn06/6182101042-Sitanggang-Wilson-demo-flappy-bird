import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('resultScript')
export class resultScript extends Component {

    static Instance:resultScript;
    start() {
        resultScript.Instance = this;
        this.node.active = false;
    }

    update(deltaTime: number) {
        
    }
    doRestart(event, customData){
        director.loadScene("gameplay") 
    }
}


