"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var SVGZoomable = (function (_super) {
    __extends(SVGZoomable, _super);
    function SVGZoomable(props) {
        _super.call(this, props);
        this.state = {};
        this.dragging = false;
        this.dragAttempt = false;
        this.initialX = props.initialX || 0;
        this.initialY = props.initialY || 0;
        this._onZoom = this._onZoom.bind(this);
        this.zoom = null;
    }
    SVGZoomable.prototype._onZoom = function () {
        var e = d3.event, t = e.translate, z = e.scale, el = this.refs['transformCanvas'];
        d3.select(el)
            .attr('transform', 'translate(' + t + ') scale(' + z + ')');
    };
    SVGZoomable.prototype.componentDidMount = function () {
        this.zoom = d3.behavior.zoom()
            .on('zoom', this._onZoom);
        d3.select(this.refs['reactZoomable'])
            .call(this.zoom);
    };
    SVGZoomable.prototype.render = function () {
        var props = this.props;
        return (React.createElement("g", {className: "react-zoomable " + (props.className ? props.className : ""), ref: "reactZoomable", key: "reactZoomable"}, React.createElement("g", {className: "drag-canvas", ref: "transformCanvas", key: "transformCanvas"}, props.children)));
    };
    return SVGZoomable;
}(React.Component));
exports.SVGZoomable = SVGZoomable;
