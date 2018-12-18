import Arena from './Arena/Arena.js';
import Player from './Player/Player';

export default class BaseGameHandler {
    protected arena: Arena;
    protected players: Player[];
    protected protagonist: Player;
    protected keyCodeMap: object;
    /* tslint:disable:no-any */
    protected gameLoops: any[];
    /* tslint:enable:no-any */
    private readonly keyHandler: () => void;

    constructor(players, arenaClassName) {
        this.keyCodeMap = {
            37: 'LEFT',
            38: 'UP',
            39: 'RIGHT',
            40: 'DOWN',
            65: 'LEFT',
            87: 'UP',
            68: 'RIGHT',
            83: 'DOWN',
        };
        this.arena = new Arena(arenaClassName);
        players.forEach((player) => {
            if (player.main()) {
                this.protagonist = player;
            }
            this.arena.drawPlayer(player);
        });
        this.players = players;
        if (!this.protagonist) {
            this.protagonist = new Player(true);
            this.players.push(this.protagonist);
        }
        this.keyHandler = this.keyControl.bind(this);
        this.gameLoops = [];
    }

    public keyControl(event) {

    }

    public gameLoop() {

    }

    public startGame() {
        window.addEventListener('keydown', this.keyHandler);
        window.addEventListener('keypress', this.keyHandler);
        this.gameLoops.push(setInterval(this.gameLoop.bind(this), 10));
    }

    public stopGame() {
        window.removeEventListener('keydown', this.keyHandler);
        window.removeEventListener('keypress', this.keyHandler);
        this.gameLoops.forEach((loop) => clearInterval(loop));
    }
}
