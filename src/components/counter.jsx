import React, { Component } from 'react';

class Counter extends Component {

    // componentDidUpdate(prevProps){
    //     console.log('prevProps', prevProps);
    //     if(prevProps.counter.value !== this.props.counter.value){
    //         //  Ajax call and get some new data from the server
    //     }
    // }



    // state = {
    //     count: this.props.value,
    //     tags: []
    // };

    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'
    // };

    // renderTags(){
    // if(this.state.tags.length === 0) return <p>No tags found !</p>
    // if(this.state.tags.length > 0) {
    //     return (
    //         <ul>
    //             {this.state.counter.tags.map(tag => <li key={tag}>{tag}</li>)}
    //         </ul>
    //     );
    // }

    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render(){
        let classes = this.getBadgetClasse();

        return (
            <div className="row">
                {/*{this.props.children}*/}
                {/*<span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>*/}
                {/*<span className={classes}>{this.formatCount()}</span>*/}
                <div className="col-1">
                    <span className={this.getBadgetClasse()}>{this.formatCount()}</span>

                </div>
                <div className="col">


                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        style={{fontSize: 15}}
                        className="btn btn-secondary btn-sm m-2">+</button>

                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        style={{fontSize: 15}}
                        disabled = {this.props.counter.value=== 0 ? true : ''}
                        className="btn btn-secondary btn-sm">-</button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        style={{fontSize: 15}}
                        className="btn btn-danger btn-sm m-2">x</button>
                    {/*{this.renderTags()}*/}
                    {/*{this.state.tags.length === 0 && <p>Plese check your tags</p>}*/}

                </div>
            </div>
        );



        console.log('props', this.props.counter)
    }

    getBadgetClasse() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value=== 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const  { value } = this.props.counter; /////// Pay attanction the same as 'this.state.count'
        return value === 0 ? 'Zero' : value;
    }


}

export default Counter;