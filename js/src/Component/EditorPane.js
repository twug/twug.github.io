/**
 * Twug fiddle
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/twug/twug.github.io
 *
 * Released under the MIT license
 * https://github.com/twug/twug.github.io/raw/master/MIT-LICENSE.txt
 */

import {Controlled as CodeMirror} from "react-codemirror2";
import React from 'react';
import SplitterLayout from 'react-splitter-layout';

export default class EditorPane extends React.Component {
    constructor(props) {
        super(props);

        this.paneRef = React.createRef();
        this.headingRef = React.createRef();

        this.codeMirrorEditor = null;

        props.bind.call(null, {
            refresh: () => {
                let splitterPaneElement = this.paneRef.current.offsetParent;
                let headingElement = this.headingRef.current;

                this.codeMirrorEditor.setSize(
                    splitterPaneElement.clientWidth,
                    splitterPaneElement.clientHeight - headingElement.offsetHeight
                );

                this.codeMirrorEditor.refresh();
            }
        });
    }

    render() {
        return (
            <div className="pane editor-pane" ref={this.paneRef}>
                <h2 className="pane__heading" ref={this.headingRef}>{this.props.name}</h2>

                <CodeMirror
                    value={this.props.code}
                    options={{
                        mode: this.props.mode,
                        theme: 'material',
                        lineNumbers: true,
                        autoScroll: true
                    }}
                    editorDidMount={editor => {
                        this.codeMirrorEditor = editor;
                    }}
                    onBeforeChange={(editor, data, value) => {
                        this.props.onChange(value);
                    }}
                />
            </div>
        );
    }
}
