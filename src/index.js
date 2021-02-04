import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Box extends React.Component
{
  render(){
    return(
      <div className='Box' onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
        <div>
          <h3 className='content-title'>
            {this.props.title}
          </h3>
        </div>
        <div className='content'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

class Show extends React.Component
{

  enter(i)
  {
    const card = document.querySelectorAll('.Box');
    card[i-1].style['width'] = '300px';
    card[i-1].style['height'] = '350px';
    card[i-1].style['box-shadow'] = '5px 5px #93a3bd';
    card[i-1].style['margin-left'] = '150px';
    card[i-1].style['margin-top'] = '30px';
    card[i-1].style['text-align'] = 'center';
    card[i-1].style['border-radius'] = '10px';
    card[i-1].style['background'] = 'linear-gradient(55deg, #FC466B 0%, #3F5EFB 100%)';
  }

  leave(i)
  {
    const card = document.querySelectorAll('.Box');
    card[i-1].style['width'] = '300px';
    card[i-1].style['height'] = '350px';
    card[i-1].style['box-shadow'] = '3px 3px #93a3bd';
    card[i-1].style['margin-left'] = '150px';
    card[i-1].style['margin-top'] = '30px';
    card[i-1].style['text-align'] = 'center';
    card[i-1].style['border-radius'] = '10px';
    card[i-1].style['background'] = 'linear-gradient(55deg, #FC466B 0%, #3F5EFB 100%)';
  }

  render(){
    return(
      <div>
        <div className='Row'>
          <Box title = 'Young Adult' content = 'Genre of book' onMouseEnter={() => this.enter(1)} onMouseLeave={() => this.leave(1)}/>
          <Box title = 'Mystery' content = 'Genre of book' onMouseEnter={() => this.enter(2)} onMouseLeave={() => this.leave(2)}/>
          <Box title = 'Thriller' content = 'Genre of book' onMouseEnter={() => this.enter(3)} onMouseLeave={() => this.leave(3)}/>
        </div>
        <div className='Row'>
          <Box title = 'Box 4' content = 'Box 4' onMouseEnter={() => this.enter(4)} onMouseLeave={() => this.leave(4)}/>
          <Box title = 'Box 5' content = 'Box 5' onMouseEnter={() => this.enter(5)} onMouseLeave={() => this.leave(5)}/>
          <Box title = 'Box 6' content = 'Box 6' onMouseEnter={() => this.enter(6)} onMouseLeave={() => this.leave(6)}/>
        </div>
        <div className='Row'>
          <Box title = 'Box 7' content = 'Box 7' onMouseEnter={() => this.enter(7)} onMouseLeave={() => this.leave(7)}/>
          <Box title = 'Box 8' content = 'Box 8' onMouseEnter={() => this.enter(8)} onMouseLeave={() => this.leave(8)}/>
          <Box title = 'Box 9' content = 'Box 9' onMouseEnter={() => this.enter(9)} onMouseLeave={() => this.leave(9)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Show />,
  document.getElementById('root')
);
