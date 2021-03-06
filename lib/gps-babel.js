/*
 * gps-babel
 * https://github.com/collinprice/gps-babel
 *
 * Copyright (c) 2014 Collin Price
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;

exports.convert = function(input_format, input_file, output_format, output_file, callback) {

	exec('gpsbabel -V', function(error, stdout, stderr) {

		if (error !== null) {
          throw new Error("GPSBabel is not installed.");
        }

		exec('gpsbabel -w -r -t -i ' + input_format + ' -f ' + input_file + ' -o ' + output_format + ' -F ' + output_file, function(error, stdout, stderr) {

			if (error) {
				callback("Could not convert file.", null);
			} else {
				callback(null, output_file);
			}
		});
	});
};