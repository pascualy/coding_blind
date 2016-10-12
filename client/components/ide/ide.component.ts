const angular = require('angular');


export class IdeComponent {
	$document; 
	$window;
	constructor($window, $document) {
		this.$document = $document;
		this.$window = $window;
	}

    outf = function(text) {
        var output = document.getElementById("output");
        text = text.replace(/</g, '&lt;');
        output.innerHTML = output.innerHTML + text;
    }

    runit = function($window) {
        var prog = document.getElementById("code").value;
        var output = document.getElementById("output");
        output.innerHTML = '';
        $window.Sk.configure({output:outf});
        try {
            var module = Sk.importMainWithBody("<stdin>", false, prog);
            var obj = module.tp$getattr('a');
            var runMethod = obj.tp$getattr('run');
            var ret = Sk.misceval.callsim(runMethod, 10);
            alert(ret.v);
        } catch (e) {
            alert(e);
        }
    }
}

export default angular.module('directives.ide', [])
  .component('ide', {
    template: require('./ide.html'),
    controller: IdeComponent
  })
  .name;
