import * as React from 'react';
import * as ReactDOM from 'react-dom';
export class SVGDraggable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onDrag = this._onDrag.bind(this);
        this.drag = null;
    }
    _onDrag() {
        let e = d3.event, t = e.translate, z = e.scale, el = ReactDOM.findDOMNode(this.props.children);
        d3.select(el)
            .attr('transform', 'translate(' + t + ')');
    }
    componentDidMount() {
        this.drag = d3.behavior.drag()
            .on('drag', this._onDrag);
        d3.select(this.props.children)
            .call(this.drag);
    }
    render() {
        let props = this.props;
        return props.children;
    }
}
