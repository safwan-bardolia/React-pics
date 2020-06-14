import React from 'react';

// write class based component to handle user i/p (using 'state')

class SearchBar extends React.Component {

    state={imageName:''};

    onFormSubmit=(event)=> {
        event.preventDefault();     //when user press 'Enter' key then form is submitted & page reload but here we are preventing that default action of reload & submitting form data to backend
        
        this.props.onSubmit(this.state.imageName);
    }


    render() { 
        return(
            <div className="ui segment">
                <form className="ui fluid form" onSubmit={this.onFormSubmit}>

                    <div className="field">  {/*define one field*/}
                        <input 
                            type="text" 
                            placeholder="Image Name" 
                            value={this.state.imageName}
                            onChange={(event)=>this.setState({imageName:event.target.value})} 
                        />  
 
                       <div className="ui pointing label">
                                Please enter image name
                        </div>
                    </div>

                </form>
           
                <h1>{this.state.imageName}</h1>
           
            </div>
        );
    }
}

export default SearchBar;
