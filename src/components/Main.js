import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid text-monospace">
      <br></br>
      &nbsp;
      <br></br>
        <div className="row">
          <div className="col-md-10">
            <div className="embed-responsive embed-responsive-16by9" style={{ maxHeight: '768px'}}>
            <video
             src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}
              controls
             >
            </video>   
            </div>
            <h3><b><i>{this.props.currentTitle}</i></b></h3>
          </div>
          <div className="col-md-2 overflow-auto text-center" style={{ maxHeight: '768px', minWidth: '175px' }}>
            <h2 className="text-warning"><b> Share Video </b></h2>
            <form onSubmit={(event) => {
              event.preventDefault()
             const title = this.videoTitle.value
             this.props.uploadVideo(title)
         }} >
              &nbsp;
              <input  type='file'  accept=".mp4, .mkv .ogg .wnv "   onChange={this.props.captureFile}  style={{width: '300px'}}   />                                                                                        
              <div className="form-group mr-sm-2 my-2">
               <input class="my-4"
               id  = "videoTitle"
               type = "text"
               className="form-control-sm-2"
               placeholder="Title..."
               required
               ref={(input)=>{this.videoTitle = input} }
               required
              />
               
                 </div>
              <button type = "sumbit" className="btn btn-danger btn-block btn-sm my-1">Upload!!</button>
              &nbsp;
             </form>
            {  this.props.videos.map((video, key) => {
             return(
             <div className="card mb-4 text-center bg-secondary mx-auto" style={{widht: '175px'}} >
             <div  className="card-title bg-dark"    >                                  
             <small  className="text-white"  ><b>{video.title}</b></small>
             </div>
              <div>
             <p onClick={() => this.props.changeVideo(video.hash, video.title)}   >
                 <video
                  src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                  style={{width: '150px'}}
                 />    
                  </p>
               </div>
               </div>
                
                
                
                )
           
           
            })}





               </div>
        </div>
      </div>
    );
  }
}

export default Main;