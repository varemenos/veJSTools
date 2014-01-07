#!/usr/bin/env node
// Node.js CLI code for tools.adonisk.com

'use strict';

// get the CLI parameters
var args = process.argv.slice();

if (args.length === 2) {
	// if there were no CLI arguments except the default node and pwd
	// then print error message
	console.log('No options and parameters specified');
	// and exit
	return -1;
}

// remove the first 2 CLI arguments which are node and the pwd
args.shift(0);
args.shift(0);

// create a new variable which contains functions from the vejstools library
var options = require('vejstools');

// loop through all the CLI arguments and process them
for (var i = 0; i < args.length; i++) {
	if (args[i][0] === '-') {
			// if current item is an option
		if (args[i][1] === '-') {
			// if current item is not an aliased option
			// TODO: "--encoding" type of options
		} else {
			// then the current item is an aliased option
			// store the option's first letter in the option variable
			var option = args[i][1];
			if (args[i+1][0] === '-'){
				// if the next item is an option
				// execute the current option's command with no parameters and show results
				console.log(options[option]());
			} else {
				// then the current item has parameters
				// store the current item's parameters in the parameter variable
				// execute current option's command with the parameter specified and show results
				var parameter = args[i+1];
				// show results
				console.log(options[option](parameter));
			}
		}
	}
}
