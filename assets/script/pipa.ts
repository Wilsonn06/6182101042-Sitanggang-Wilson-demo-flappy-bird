import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, randomRangeInt, Vec3 } from 'cc';
import { bird } from './bird';
const { ccclass, property } = _decorator;

@ccclass('pipa')
export class pipa extends Component {

    private wBackground:number = 288;
    private wPipa:number = 52;
    private isScored:boolean = false; // Flag untuk memastikan poin hanya ditambah sekali

    start() {
        this.node.translate(new Vec3(0, randomRangeInt(-100, 100), 0));
    }

    update(deltaTime: number) {
        this.node.translate(new Vec3(-100 * deltaTime, 0, 0));
        if (this.node.position.x <= -196) {
            this.resetPipePosition();
            this.isScored = false; // Reset flag setiap kali pipa kembali ke kanan
        }

        // Deteksi apakah burung sudah melewati pipa
        let birdNode = this.node.parent.getChildByName('bird'); // Asumsi burung adalah child dari parent node yang sama
        if (birdNode && this.node.position.x < birdNode.position.x && !this.isScored) {
            let birdComp = birdNode.getComponent(bird);
            if (birdComp) {
                birdComp.addScore(); // Tambah poin
                this.isScored = true; // Hindari penambahan poin berulang kali
            }
        }
    }

    resetPipePosition() {
        if (this.node.position.y < 0) {
            this.node.translate(new Vec3(this.wBackground + this.wPipa, randomRangeInt(0, 100), 0));
        } else {
            this.node.translate(new Vec3(this.wBackground + this.wPipa, randomRangeInt(-100, 0), 0));
        }
    }
}
