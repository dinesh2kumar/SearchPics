import React from 'react';

class SearchBar extends React.Component{
state={term:''}



OnInputSubmit=(event)=>{
event.preventDefault();
console.log(this.state.term)
this.props.onSubmit(this.state.term);
}
    render(){
        return (
            <div onSubmit={this.OnInputSubmit}
            className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text' onChange={e=> this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;