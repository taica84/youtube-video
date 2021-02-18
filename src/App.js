import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtubeKey from './apis/youtubeKey';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos : [],
       selectedVideo : null
    }

    // this.onRequestSubmit = this.onRequestSubmit.bind(this)
  }

  componentDidMount() {
      this.onRequestSubmit('Ce te legeni codrule')
  }
  
onRequestSubmit = async (requests) => {
    
       const response = await youtubeKey.get('/search' , {
        params: {
          q : requests
        }
      });
      this.setState({videos:response.data.items ,selectedVideo : response.data.items[0] })
      console.log(response.data.items)
   }

   onVideoSelect  = (video) => {
     this.setState({selectedVideo:video})
   }
   
  render() {
    return (
      <div className='ui container'>
          <SearchBar onRequestSubmit={this.onRequestSubmit}  />
           <div className='ui grid'>
             <div className='ui row'>
               <div className='fourteen wide column' style={{width:'100%'}}>
                 <VideoDetail  video ={this.state.selectedVideo} />
               </div>
               <div className='eleven wide column' style={{width:'100%'}}>
                 <VideoList videosLength={this.state.videos} onVideoSelect={this.onVideoSelect} />
               </div>

             </div>

           </div>

          
          
      </div>
    )
  }
}

