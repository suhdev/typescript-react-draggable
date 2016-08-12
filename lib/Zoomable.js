"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Zoomable = (function (_super) {
    __extends(Zoomable, _super);
    function Zoomable(props) {
        _super.call(this, props);
        this.state = {};
        this._onZoom = this._onZoom.bind(this);
        this.zoom = null;
    }
    Zoomable.prototype._onZoom = function () {
        var e = d3.event, t = e.translate, z = e.scale, el = this.refs['transformCanvas'];
        d3.select(el)
            .attr('transform', 'translate(' + [t[0] + 'px', t[1] + 'px'] + ') scale(' + z + ')');
    };
    Zoomable.prototype.componentDidMount = function () {
        this.zoom = d3.behavior.zoom()
            .on('zoom', this._onZoom);
        d3.select(this.refs['reactZoomable'])
            .call(this.zoom);
    };
    Zoomable.prototype.render = function () {
        var props = this.props;
        return (React.createElement("div", {className: "react-zoomable " + (props.className ? props.className : ""), ref: "reactZoomable", key: "reactZoomable"}, React.createElement("div", {className: "drag-canvas", ref: "transformCanvas", key: "transformCanvas"}, props.children)));
    };
    return Zoomable;
}(React.Component));
exports.Zoomable = Zoomable;
