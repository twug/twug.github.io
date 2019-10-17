/**
 * Twug fiddle
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/twug/twug.github.io
 *
 * Released under the MIT license
 * https://github.com/twug/twug.github.io/raw/master/MIT-LICENSE.txt
 */

import React from 'react';

export default class Menubar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menubar">
                <span className="menubar__title">Twug fiddle</span>

                <ul className="menubar__controls">
                    <li>
                        <button className="menubar__button menubar__run" onClick={this.props.onRun}>
                            <span className="menubar__run__icon" />
                            Run
                        </button>
                    </li>
                    <li>
                        <a className="menubar__button menubar__github" href="https://github.com/twug/twug">
                            View on GitHub
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
