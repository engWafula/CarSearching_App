import { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import unSplash from './api/unSplash';


class App extends Component {
  state = { images: [] };

  onSearchSubmit =async (term)=>{
  const response = await unSplash.get("/search/photos",{
    params:{query:term},
   })
    this.setState({images:response.data.results})
  }
  render() {
  return (
    <div className="ui container" style={{marginTop:"10px"}}>
     <SearchBar onSubmit={this.onSearchSubmit} />
      Found: {this.state.images.length} images
    </div>
  );
}
}

export default App;
