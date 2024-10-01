import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('background')
export class background extends Component {
    frameCount = 0;
    secondCount = 0;
    private wBackground:number = 288;
    start() {

    }
    update(deltaTime: number) {
        this.node.translate(new Vec3(-100*deltaTime,0,0));
        if(this.node.position.x<=(this.wBackground/1024+this.wBackground)*-1){
            this.node.translate(new Vec3(this.wBackground,0,0));
        }
        
    }
}


