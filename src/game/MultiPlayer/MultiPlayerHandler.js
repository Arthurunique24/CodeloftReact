import BaseGameHandler from '../BaseGameHandler.ts';
import eventBus from '../../modules/EventBus';
import GameSocket from '../../service/GameSocket/GameSocket';

export default class MultiPlayerHandler extends BaseGameHandler {
	constructor(players = [], arenaClassName) {
		super(players, arenaClassName);
		this.arrayHandler = this.arrayInit.bind(this);
		eventBus.on('connectedToRoom', this.arrayHandler);
		eventBus.on('gameFieldResized', this.arrayHandler);
		this.fieldUpdater = this.updateField.bind(this);
		eventBus.on('fieldUpdated', this.fieldUpdater);
		this.deathHandler = this.handleDeath.bind(this);
		// eventBus.on('protagonistIsDead', this.deathHandler);
		this.prevPlayerHeads = [];
		this.prevPixels = [];
		this.cachedField = [];
		this.playersAmount = 0;
	}

	arrayInit(payload) {
		this.arena.clearMultiField();
		if (payload) {
			this.arena.scaleGameField(payload.size.x, payload.size.y);
			payload.field.forEach((array, i) => {
				this.cachedField.push([]);
				array.forEach((cell, j) => {
					this.cachedField[i].push(payload.field[i][j].color);
				});
			});
		}
		this.cachedField.forEach((array, i) => {
			array.forEach((cell, j) => {
				if (cell !== '#000000') {
					this.arena.drawPixel(j, i, cell);
				}
			});
		});
	}

	handleDeath(payload) {
		payload.diff.forEach((cellObject) => {
			this.arena.clearPixel(cellObject.pos.x, cellObject.pos.y);
		});
	}

	keyControl(event) {
		const action = this.keyCodeMap[event.keyCode];
		this.gameSocket.sendDirection(action);
	}

	updateField(data) {
		const diff = data.payload.diff;
		this.prevPlayerHeads.forEach((player) => {
			this.arena.clearPlayerHead(player.position.x, player.position.y, player.movedirection, player.color);
		});
		diff.forEach((pixel) => {
			this.arena.drawPixel(pixel.pos.x, pixel.pos.y, pixel.color);

			if (this.cachedField[pixel.pos.y][pixel.pos.x] === '#000000') {
				this.arena.drawPixel(pixel.pos.x, pixel.pos.y, pixel.color);
				this.cachedField[pixel.pos.y][pixel.pos.x] = pixel.color;
			} else if (this.cachedField[pixel.pos.y][pixel.pos.x] !== '#000000' && pixel.color === '#000000') {
				this.arena.drawPixel([pixel.pos.x, pixel.pos.y, pixel.color]);
				this.cachedField[pixel.pos.y][pixel.pos.x] = pixel.color;
			} else if (this.cachedField[pixel.pos.y][pixel.pos.x] !== '#000000' && pixel.color !== '#000000') {
				this.arena.drawPixel(pixel.pos.x, pixel.pos.y, this.cachedField[pixel.pos.y][pixel.pos.x]);
				pixel.color = this.cachedField[pixel.pos.y][pixel.pos.x];
			}
		});
		this.cachedField.forEach((array, i) => {
			array.forEach((cell, j) => {
				if (cell !== '#000000') {
					this.arena.drawPixel(j, i, cell);
				}
			});
		});

		data.payload.players.forEach((player) => {
			if (!player.isdead) {
				this.arena.drawPlayerHead(player.position.x, player.position.y, player.movedirection);
			}
		});
		this.prevPlayerHeads = data.payload.players;
	}

	startGame() {
		this.arena.loadTextures().then(() => {
			super.startGame();
			this.gameSocket = new GameSocket();
		});
	}

	stopGame() {
		eventBus.off('gameFieldResized', this.arrayHandler);
		eventBus.off('connectedToRoom', this.arrayHandler);
		eventBus.off('fieldUpdated', this.fieldUpdater);
		this.gameSocket.endSession();
		super.stopGame();
	}
}
