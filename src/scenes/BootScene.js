export class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        const basePath = window.location.pathname.replace(/\/[^\/]*$/, '');
        this.load.image('title', `${basePath}/assets/images/title.png`);
        this.load.image('digitalBackground', `${basePath}/assets/images/shoot2D-background.png`);
        this.load.image('digitalBackground_final', `${basePath}/assets/images/shootbackgrounFinal.png`);
        this.load.image('openion2_32bit', `${basePath}/assets/images/openion2_32bit.png`);
        this.load.image('openion_32bit', `${basePath}/assets/images/openion_32bit.png`);
        this.load.image('clonihil2_32bit', `${basePath}/assets/images/clonihil2_32bit.png`);
        this.load.image('clonihil_32bit', `${basePath}/assets/images/clonihil_32bit.png`);
        this.load.image('bullet', `${basePath}/assets/images/bullet.png`);
        this.load.image('clonihil2_bullet', `${basePath}/assets/images/clonihil2_bullet.png`);
        this.load.image('clonihil_bullet', `${basePath}/assets/images/clonihil_bullet.png`);

        this.load.image('openion_face_default', `${basePath}/assets/images/openion_face_default.png`);
        this.load.image('openion2_face_default', `${basePath}/assets/images/openion2_face_default.png`);
        this.load.image('openion_face_embarrassed', `${basePath}/assets/images/openion_face_embarrassed.png`);
        this.load.image('openion_face_dark', `${basePath}/assets/images/openion_face_dark.png`);
        this.load.image('openion2_face_embarrassed', `${basePath}/assets/images/openion2_face_embarrassed.png`);
        this.load.image('openion2_face_noise', `${basePath}/assets/images/openion2_face_noise.png`);
        this.load.image('openion2_face_tired', `${basePath}/assets/images/openion2_face_tired.png`);
        this.load.image('openion_house', `${basePath}/assets/images/openion_house.png`);
        this.load.image('openion_house_offTV', `${basePath}/assets/images/openion_house_offTV.png`);
        this.load.image('gameover', `${basePath}/assets/images/gameover.png`);

        this.load.image('reporter_face', `${basePath}/assets/images/reporter_face.png`);
        this.load.image('clonihil_face_default', `${basePath}/assets/images/clonihil_face_default.png`);
        this.load.image('clonihil_face_suspect', `${basePath}/assets/images/clonihil_face_suspect.png`);
        this.load.image('clonihil_face_dark', `${basePath}/assets/images/clonihil_face_dark.png`);
        this.load.image('clonihil_face_future', `${basePath}/assets/images/clonihil_face_future.png`);
        this.load.image('clonihil2_face', `${basePath}/assets/images/clonihil2_face.png`);
        this.load.image('renbow_face_default', `${basePath}/assets/images/renbow_face_default.png`);
        this.load.image('murderscene', `${basePath}/assets/images/murderscene.png`);
        this.load.image('murderscene2', `${basePath}/assets/images/murderscene2.png`);
        this.load.image('murderscene3', `${basePath}/assets/images/murderscene3.png`)
        this.load.image('murderscene_recall', `${basePath}/assets/images/murderscene_recall.png`);;
        this.load.image('digital_necklace', `${basePath}/assets/images/digital_necklace.png`);
        this.load.image('digital_watch', `${basePath}/assets/images/digital_watch.png`);
        this.load.image('digital_fragments', `${basePath}/assets/images/digital_fragments.png`);
        this.load.image('backstreet', `${basePath}/assets/images/backstreet.png`);
        this.load.image('backstreet2', `${basePath}/assets/images/backstreet2.png`);
        this.load.image('backstreet_attacked', `${basePath}/assets/images/backstreet_attacked.png`);
        this.load.image('clonihil_lab', `${basePath}/assets/images/clonihil_lab.png`);
        this.load.image('clonihil_lab_inside', `${basePath}/assets/images/clonihil_lab_inside.png`);
        this.load.image('clonihil_lab_noise', `${basePath}/assets/images/clonihil_lab_noise.png`);
        this.load.image('clonihil_house', `${basePath}/assets/images/clonihil_house.png`);
        this.load.image('clonihil_house2', `${basePath}/assets/images/clonihil_house2.png`);
        this.load.image('clonihil_suicide', `${basePath}/assets/images/clonihil_suicide.png`);
        this.load.image('asexual_success', `${basePath}/assets/images/asexual_success.png`);
        this.load.image('asexual_dispute', `${basePath}/assets/images/asexual_dispute.png`);
    }

    create() {
        // 타이틀 화면 이동
        this.scene.start('TitleScene');
    }
}
