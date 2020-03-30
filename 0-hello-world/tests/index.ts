import "mocha";
import * as assert from "assert"; // submodule
//import {SmokeTest} from "../source/index"; // auto
import {SmokeTest} from "../dist/index"; // manual

describe("index",()=>{

    it("should say 'hello world' ",()=>{
        SmokeTest.HelloWorld();
        assert.ok(true);
    });
});