import { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import unSplash from './api/unSplash';
import ImageList from './components/ImageList';


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
      <ImageList images={this.state.images}/>
    </div>
  );
}
}

export default App;
