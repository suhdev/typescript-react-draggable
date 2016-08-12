import * as React from 'react';
export class SVGZoomable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.dragging = false;
        this.dragAttempt = false;
        this.initialX = props.initialX || 0;
        this.initialY = props.initialY || 0;
        this._onZoom = this._onZoom.bind(this);
        this.zoom = null;
    }
    _onZoom() {
        let e = d3.event, t = e.translate, z = e.scale, el = this.refs['transformCanvas'];
        d3.select(el)
            .attr('transform', 'translate(' + t + ') scale(' + z + ')');
    }
    componentDidMount() {
        this.zoom = d3.behavior.zoom()
            .on('zoom', this._onZoom);
        d3.select(this.refs['reactZoomable'])
            .call(this.zoom);
    }
    render() {
        let props = this.props;
        return (React.createElement("g", {className: "react-zoomable " + (props.className ? props.className : ""), ref: "reactZoomable", key: "reactZoomable"}, React.createElement("g", {className: "drag-canvas", ref: "transformCanvas", key: "transformCanvas"}, props.children)));
    }
}
