/* 
 * File: oscillate.js
 * traces the locus of a damped simple harmonic function
 */
"use strict";

//
//
// damped simple harmonic oscillation
// delta: how large an oscillate
// frequency: how many times to oscillate
// duration: for how long in number of update cycles
//
class Oscillate {
    /**
     * Object for simple, under-dampened harmonic oscillation
     * @constructor
     * @param {float} delta  - the maximum magnitude of the oscillation
     * @param {float} frequency - the frequency of the oscillation in revolutions per cycle
     * @param {integer} duration - the number of cycles the oscillation should take
     * @returns {Oscillate} a new Oscillate instance
     */
    constructor(delta, frequency, duration) {
        this.mMag = delta;

        this.mCycles = duration; // number of cycles to complete the transition
        this.mOmega = frequency * 2 * Math.PI; // Converts frequency to radians 

        this.mNumCyclesLeft = duration;
    }
    /**
     * Restarts this Oscillation
     * @method
     */
    reStart() {
        this.mNumCyclesLeft = this.mCycles;
    }

    /**
     * Returns if the Oscillation has completed
     * @method
     * @returns {boolean} if duration of this Oscillation has been reached
     */
    done() {
        return (this.mNumCyclesLeft <= 0);
    }

    /**
     * Returns the next amplitude for this OScillation
     * @method
     * @returns {float} the next amplitude for this Oscillation
     */
    getNext() {
        this.mNumCyclesLeft--;
        let v = 0;
        if (!this.done()) {
            v = this._nextValue();
        }
        return (v * this.mMag);
    }

    // local/protected methods
    _nextValue() {
        return (this._nextDampedHarmonic());
    }

    /**
     * Internal method to return the next dampened cosine value
     * @method 
     * @returns {float} the next dampened cosine value
     */
    _nextDampedHarmonic() {
        // computes (Cycles) * cos(  Omega * t )
        let frac = this.mNumCyclesLeft / this.mCycles;
        return frac * frac * Math.cos((1 - frac) * this.mOmega);
    }
}

export default Oscillate;