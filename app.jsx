import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }

    this.UserList = this.UserList.bind(this);

  }
  componentDidMount() {
    this.UserList();
  }

  UserList() {

    fetch('https://theimdbapi.org/api/find/person?name=Kamal+Haasan').then(response => {
      return response.json();
    }).then(data => {
      const posts = data[0].filmography.soundtrack;
      this.setState({posts});
    });

  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.posts.map((item, i) => {
              return <Content item={item} key={i}/>
            })
          }
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.item.title}</div>
      </div>
    );
  }
}

export default App;