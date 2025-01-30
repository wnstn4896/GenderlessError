import { BootScene } from './scenes/BootScene.js';
import { TitleScene } from './scenes/TitleScene.js';
import { PrologueScene } from './scenes/PrologueScene.js';
import { EarlyPartScene } from './scenes/EarlyPartScene.js';
import { ShooterScene } from './scenes/ShooterScene.js';
import { MidPartScene } from './scenes/MidPartScene.js';
import { FinalBattleScene } from './scenes/FinalBattleScene.js';
import { HiddenBattleScene } from './scenes/HiddenBattleScene.js';
import { HiddenScene } from './scenes/HiddenScene.js';
import { DefeatEndingScene } from './scenes/DefeatEndingScene.js';
import { TrueEndingScene } from './scenes/TrueEndingScene.js';

document.oncontextmenu = function(e) { return false; }

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    transparent: true, // 캔버스 배경을 투명하게 설정
    scene: [BootScene, TitleScene, PrologueScene, EarlyPartScene, ShooterScene, MidPartScene, FinalBattleScene, HiddenBattleScene, HiddenScene, DefeatEndingScene, TrueEndingScene], // 모든 Scene 등록
    scale: {
        mode: Phaser.Scale.FIT, // 디바이스 화면에 맞게 비율 조정
        autoCenter: Phaser.Scale.CENTER_BOTH, // 화면 중앙 정렬
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    input: {
        activePointers: 3, // 최대 3개의 동시 입력 허용
    },
};

new Phaser.Game(config);
