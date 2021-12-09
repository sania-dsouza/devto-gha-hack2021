const expect = require("chai").expect;
const VirtualAlexa = require("virtual-alexa").VirtualAlexa;

describe("Test the nutriplanner app skills", function() {
    let alexa;
    
    beforeEach(function () {
        alexa = VirtualAlexa.Builder()
            .handler("./index.handler") // Lambda function file and name
            .interactionModelFile("./build/platform.alexa/skill-package/interactionModels/custom/en-US.json")
            .create();
    });

    it("Should agree that true is true", function() {
        // console.log(alexa);
        expect(true).to.be.true;
    });

    // it("Should launch the skill and get a response", function(done) {
    //     alexa.filter(function(request) {
    //         request.context.System.device.supportedInterfaces.Display = {};
    //         request.context.System.device.supportedInterfaces.VideoApp = {};
    //         return request;
    //     }).launch().then((result) => {
    //         expect(result.response.outputSpeech.ssml).to.exist;
    //         expect(result.response.outputSpeech.ssml).to.include("nutri planner");
    //         done();
    //     });
    // });

    // it("Should utter hello and get a response", function(done) {
    //     alexa.utter("yes").then((result) => {
    //         expect(result.response.outputSpeech.ssml).to.exist;
    //         expect(result.response.outputSpeech.ssml).to.include("Hello World");
    //         done();
    //     });
    // });


    
});