import "mocha";
import * as assert from "assert"; // submodule
describe("index",()=>{
    it("should say 'hello world' ",()=>{
        console.log("hello world");
        assert.ok(true);
    });
});