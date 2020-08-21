import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import TopBar from './TopBar';
const $ = require('zepto');

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { content } = this.props;
        return (
            <div className='row'>
                <div id='main-content' className='panel panel-primary' onClick={this._openAddModal}>
                    点我console
                </div>
                <label>
                    正文：
                    <input className='J_context' type='text' placeholder='请输入添加的内容' />
                </label>
                <label>
                    <input className='clickme J_add' type='button' onClick={e => this._addItem(e)} />
                    提交
                </label>
                <label>
                    <input className='clickme J_clear' type='button' onClick={e => this._clearItem(e)} />
                    重置
                </label>
                <div className='content'>
                    <div>{content.conter}</div>
                    <div>
                        <TopBar content={content} />
                    </div>
                </div>
            </div>
        );
    }

    _addItem() {
        var text = $('.J_context').val();
        this.props.actions.addItem(text);
    }

    _clearItem() {
        this.props.actions.clearItem();
    }

    _openAddModal() {
        console.log('click');
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
