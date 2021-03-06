import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }

    this.UserList = this.UserList.bind(this);
    this.setStateHandler = this.setStateHandler.bind(this);

this.setDeleteHandler = this.setDeleteHandler.bind(this);
  }
  componentDidMount() {
    this.UserList();
  }
 setStateHandler() {
 	alert(0)
      var item = {
        "url": "http://www.imdb.com/title/tt4937812/", 
        "title": "PAMMAL K SAMBANTHAM", 
        "imdb_id": "tt4937812", 
        "type": "Film", 
        "year": "2015"
      };
      var myArray = this.state.posts;
      myArray.push(item)
      console.log(myArray)
      this.setState({posts: myArray})
   };
  setDeleteHandler(index) {
    return () => {
      let posts = [...this.state.posts];
      posts.splice(index,1);
      this.setState({posts});
    }
};

  setUpdateHandler(index) {
    return () => {
      alert(index)
      let posts = [...this.state.posts];
      posts[index]= {
        "url": "http://www.imdb.com/title/tt4937812/", 
        "title": "idris movie", 
        "imdb_id": "tt4937812", 
        "type": "Film", 
        "year": "2015"
      };
      this.setState({posts});
    }
};


  UserList() {
	alert(1)
      fetch('http://www.theimdbapi.org/api/person?person_id=nm0352032').then(response => {
      return response.json();
    }).then(data => {
      const posts = data.filmography.soundtrack;
      this.setState({posts});
    });

  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.posts.map((item, i) => {
              return <Content item={item} key={i} deleteHandler={this.setDeleteHandler(i)} updateHandler={this.setUpdateHandler(i)}/> 
            })
          }
        </div>
        <button onClick = {this.setStateHandler}>Add Movie Name</button>

      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
      <table>
      <tbody>
<tr>
<td>{this.props.item.title}</td>
<td>{this.props.item.type}</td>
<td>{this.props.item.type}</td>
<td><button onClick = {this.props.deleteHandler}>Delete</button></td>
<td><button onClick = {this.props.updateHandler}>Update</button></td>


</tr>
</tbody>
      </table>
        
      </div>

    );
  }
}

export default App;
