/**
 * Twug fiddle
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/twug/twug.github.io
 *
 * Released under the MIT license
 * https://github.com/twug/twug.github.io/raw/master/MIT-LICENSE.txt
 */

import React from 'react';

export default class ResultPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pane result-pane" ref={this.paneRef}>
                <h2 className="pane__heading" ref={this.headingRef}>Result</h2>

                <div className="result-pane__result" dangerouslySetInnerHTML={{__html: this.props.html}} />
            </div>
        );
    }
}
