'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getDefaultProps: function getDefaultProps() {
    return { prefixCls: 'ant-alert' };
  },
  getInitialState: function getInitialState() {
    return { display: 'block' };
  },
  handleClose: function handleClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({
      display: 'none'
    });
  },
  render: function render() {
    var iconClass = this.props.message ? 'ant-alert-with-message-icon anticon-' : 'ant-alert-icon anticon-';
    switch (this.props.type) {
      case 'success':
        iconClass += 'check-circle';
        break;
      case 'info':
        iconClass += 'question-circle';
        break;
      case 'error':
      case 'warn':
        iconClass += 'info-circle';
        break;
      default:
        iconClass += 'default';
    }
    if (this.props.message) {
      return _react2['default'].createElement(
        'div',
        { style: { display: this.state.display }, className: 'ant-alert-with-message ant-alert-with-message-' + this.props.type },
        _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
        _react2['default'].createElement(
          'p',
          { className: 'ant-alert-with-message-message' },
          this.props.message
        ),
        _react2['default'].createElement(
          'span',
          { className: 'ant-alert-with-message-description' },
          this.props.description
        ),
        _react2['default'].createElement(
          'a',
          { onClick: this.handleClose, className: 'ant-alert-with-message-close-icon' },
          _react2['default'].createElement('span', { className: 'ant-alert-with-message-close-icon-x' })
        )
      );
    } else {
      if (this.props.closeText) {
        return _react2['default'].createElement(
          'div',
          { style: { display: this.state.display }, className: 'ant-alert ant-alert-' + this.props.type },
          _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
          _react2['default'].createElement(
            'span',
            { className: 'ant-alert-description' },
            this.props.description
          ),
          _react2['default'].createElement(
            'span',
            { onClick: this.handleClose, className: 'ant-alert-close-text' },
            this.props.closeText
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          { style: { display: this.state.display }, className: 'ant-alert ant-alert-' + this.props.type },
          _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
          _react2['default'].createElement(
            'span',
            { className: 'ant-alert-description' },
            this.props.description
          ),
          _react2['default'].createElement(
            'a',
            { onClick: this.handleClose, className: 'ant-alert-close-icon' },
            _react2['default'].createElement('span', { className: 'ant-alert-close-icon-x' })
          )
        );
      }
    }
  }
});
module.exports = exports['default'];