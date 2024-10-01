import { _decorator, Collider2D, Component, Contact2DType, EventTouch, Input, input, IPhysics2DContact, Label, Node, Vec3 } from 'cc';
import { resultScript } from './resultScript';
const { ccclass, property } = _decorator;

@ccclass('bird')
export class bird extends Component {

    private vy:number = 0;
    private gravity:number = 500;



    private score:number = 0; // Tambahkan variabel score
    @property(Label)
    private scoreLabel: Label | null = null; // Label untuk menampilkan skor


    start(){
        input.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
        let collider = this.getComponent(Collider2D);
        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT,this.onBeganContact, this);
        }
    }

    onBeganContact(selfCollider:Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){
        resultScript.Instance.node.active = true;
    }

    onTouchStart(event: EventTouch){
        console.log('touch start');
        this.vy = 200;
    }

    addScore(){
        this.score += 1;
        if (this.scoreLabel) {
            this.scoreLabel.string = ''+this.score.toString();
        }
    }

    update(deltaTime: number){
        this.node.translate(new Vec3(0,this.vy*deltaTime,0));
        this.vy -=this.gravity*deltaTime;
    }
}
