import * as assert from "assert";
import double from "../src/double";

describe('The double function', function (){
    
    it('should double a string', function () {
        assert.equal("Andre : Andre", double("Andre"));
    });


    it('should return a blank string for a blank string', function () {
        assert.equal("", double(""));
    });
});