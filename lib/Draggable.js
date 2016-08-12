"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Draggable = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(props) {
        _super.call(this, props);
        this.state = {};
        this._onDrag = this._onDrag.bind(this);
        this.drag = null;
    }
    Draggable.prototype._onDrag = function () {
        var e = d3.event, t = e.translate, z = e.scale, el = ReactDOM.findDOMNode(this.props.children);
        d3.select(el)
            .attr('transform', 'translate(' + [t[0] + 'px', t[1] + 'px'] + ')');
    };
    Draggable.prototype.componentDidMount = function () {
        this.drag = d3.behavior.drag()
            .on('zoom', this._onDrag);
        d3.select(this.props.children)
            .call(this.drag);
    };
    Draggable.prototype.render = function () {
        var props = this.props;
        return props.children;
    };
    return Draggable;
}(React.Component));
exports.Draggable = Draggable;
