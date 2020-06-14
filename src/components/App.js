import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state={images:[]};      //api returns an array of img

    onSearchBarSubmit=async (imageName) => {
        const responce= await unsplash.get('/search/photos/',{              //using instance of axios (unsplash)  which contain some predefined property
            params:{query:imageName} ,
        });     
        
        this.setState({images: responce.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                {/*passing onSubmit as props which contain onSearchSubmit() method */}
                <SearchBar onSubmit={this.onSearchBarSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );                
    }
}

export default App;