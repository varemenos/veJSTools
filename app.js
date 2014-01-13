#!/usr/bin/env node
// Node.js CLI code for tools.adonisk.com

'use strict';

// load the vejstools library
var options = require('vejstools-lib');

// get the CLI parameters
var args = process.argv.slice();

if (args.length === 2) {
	// if there were no CLI arguments except the default node and pwd
	// then print the help page
	options.help();
	// and exit
	return 0;
}

// remove the first 2 CLI arguments which are node and the pwd
args.shift(0);
args.shift(0);

var unknownOption = function(option) {
	if (option) {
		console.log('unknown option "' + option + '"');
	}
}

// loop through all the CLI arguments and process them
for (var i = 0; i < args.length; i++) {
	if (args[i][0] === '-') {
		// if current item is an option
		// create new variables which will store the option target and the result which is locked
		var option;
		var result = false;
		if (args[i].length === 2) {
			// then the current item is an aliased option
			// store the option's first letter in the option variable
			option = args[i][1];
		} else {
			// TODO: make un-aliased options work
			// if current item is not an aliased option
			// store the option's full name in the option variable
			option = args[i].slice(2);
		}

		if (options[option]) {
			// if this option exists in the vejstools-lib library
			if (args[i + 1][0] === '-') {
				// if the next item is an option
				// execute the current option's command with no parameters and show results
				console.log(options[option]());
			} else {
				// then the current item has parameters
				// store the current item's parameters in the parameter variable
				// execute current option's command with the parameter specified and show results
				var parameter = args[i + 1];
				// show results
				result = options[option](parameter);
			}
		} else {
			// unknown option
			unknownOption(option);
		}

		if (result) {
			// if a result exists
			// print result on screen
			console.log(result);
			// reset result lock
			result = false;
		}
	}
}
