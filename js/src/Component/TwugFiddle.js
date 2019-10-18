/**
 * Twug fiddle
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/twug/twug.github.io
 *
 * Released under the MIT license
 * https://github.com/twug/twug.github.io/raw/master/MIT-LICENSE.txt
 */

import EditorPane from './EditorPane';
import Menubar from './Menubar';
import React from 'react';
import ResultPane from './ResultPane';
import SplitterLayout from 'react-splitter-layout';
import twug from 'twug';

export default class TwugFiddle extends React.Component {
    constructor(props) {
        super(props);

        this.boundOnWindowResize = this.onWindowResize.bind(this);
        this.twigPane = null;
        this.jsPane = null;

        this.state = {
            js:
`twug.renderString(twig, {name: 'Fred'}).then((renderedHtml) => {
    print(renderedHtml);
}, (error) => {
    print(error);
});
`,
            twig:
`Hello there <strong>{{ name }}</strong>!
`,
            renderedHtml: ''
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.boundOnWindowResize);

        this.refresh();
        this.run();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.boundOnWindowResize);
    }

    onResize() {
        this.refresh();
    }

    onRun() {
        this.run();
    }

    onWindowResize() {
        this.onResize();
    }

    refresh() {
        this.twigPane.refresh();
        this.jsPane.refresh();
    }

    run() {
        this.setState({renderedHtml: ''});
        let print = (html) => {
            this.setState(({renderedHtml}) => {
                return {
                    renderedHtml: renderedHtml + html
                };
            });
        };

        new Function('print', 'twug', 'twig', this.state.js)(
            print,
            twug,
            this.state.twig
        );
    }

    render() {
        return (
            <div className="fiddle">
                <Menubar onRun={this.onRun.bind(this)} />

                <SplitterLayout
                    vertical={false}
                    onDragEnd={this.onResize.bind(this)}
                    onSecondaryPaneSizeChange={this.onResize.bind(this)}
                >
                    <div>
                        <SplitterLayout
                            vertical={true}
                            onDragEnd={this.onResize.bind(this)}
                            onSecondaryPaneSizeChange={this.onResize.bind(this)}
                        >
                            <EditorPane
                                name="Twig"
                                mode="twig"
                                code={this.state.twig}
                                onChange={(code) => {
                                    this.setState({twig: code})
                                }}
                                bind={(pane) => {
                                    this.twigPane = pane;
                                }}
                            />

                            <EditorPane
                                name="JavaScript"
                                mode="javascript"
                                code={this.state.js}
                                onChange={(code) => {
                                    this.setState({js: code})
                                }}
                                bind={(pane) => {
                                    this.jsPane = pane;
                                }}
                            />
                        </SplitterLayout>
                    </div>
                    <div>
                        <ResultPane html={this.state.renderedHtml} />
                    </div>
                </SplitterLayout>
            </div>
        );
    }
}
