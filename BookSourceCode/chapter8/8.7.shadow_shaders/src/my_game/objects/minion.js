"use strict";  // Operate in Strict mode such that variables must be declared before used!

import engine from "../../engine/index.js";

class Minion extends engine.GameObject {
    constructor(spriteTexture, normalMap, atX, atY) {
        super(null);

        this.kDelta = 0.2;
    
        if (normalMap === null) {
            this.mRenderComponent = new engine.LightRenderable(spriteTexture);
        } else {
            this.mRenderComponent = new engine.IllumRenderable(spriteTexture, normalMap);
        }
    
        this.mRenderComponent.setColor([1, 1, 1, 0]);
        this.mRenderComponent.getXform().setPosition(atX, atY);
        this.mRenderComponent.getXform().setSize(18, 14.4);
        this.mRenderComponent.getXform().setZPos(2);
        this.mRenderComponent.setSpriteSequence(512, 0,      // first element pixel position: top-left 512 is top of image, 0 is left of image
                                       204, 164,    // width x height in pixels
                                       5,           // number of elements in this sequence
                                       0);          // horizontal padding in between
        this.mRenderComponent.setAnimationType(engine.eAnimationType.eSwing);
        this.mRenderComponent.setAnimationSpeed(30);
                                    // show each element for mAnimSpeed updates
    }

    update() {
        // remember to update this.mRenderComponent's animation
        this.mRenderComponent.updateAnimation();
    }
}

export default Minion;