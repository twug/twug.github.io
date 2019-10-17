/**
 * Twug fiddle
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/twug/twug.github.io
 *
 * Released under the MIT license
 * https://github.com/twug/twug.github.io/raw/master/MIT-LICENSE.txt
 */

'use strict';

module.exports = {
    context: __dirname,
    entry: './index',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /\bnode_modules\b/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js'
    }
};
