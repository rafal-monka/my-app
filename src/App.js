import React from 'react';
import logo from './logo.svg';
import './App.css';

function App2XXX() {
  var posts = [{title: 'A'}, {title: 'B'}, {title: 'C'}];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React World</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>

        <ul>      
            {posts.map(post => (
              <li key={post.title}>{post.title}</li>
            ))}
        </ul>
      </header>
    </div>
  );
}

class App extends React.Component {
  constructor() {
      super();

      this.state = {
          filteredUsers: allContacts
      };
  }
  
  render() {
      const {tytul} = this.props; 
      return (
          <div>
              <main className="ui main text container">                        
                  <h1>{tytul}</h1>
                  <div className="ui input">
                      <input onInput={this.filterUsers.bind(this)}
                             type="text" placeholder="Search..." />
                  </div>
                  {this.state.filteredUsers ? <ContactList lista={this.state.filteredUsers} tytul={tytul}/> : 'Ładowanie…'}
              </main>
          </div>
      );
  }

  filterUsers(e) {
      const text = e.currentTarget.value;
      const filteredUsers = this.getFilteredUsersForText(text)
      this.setState({
          filteredUsers
      });
  }


  
  getFilteredUsersForText(text) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    // async function postData(url = '', data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       mode: 'cors', // no-cors, *cors, same-origin
    //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //       credentials: 'same-origin', // include, *same-origin, omit
    //       headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', // manual, *follow, error
    //       referrerPolicy: 'no-referrer', // no-referrer, *client
    //       body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     });
    //     return await response.json(); // parses JSON response into native JavaScript objects
    // }

    // postData('https://example.com/answer', { answer: 42 })
    //     .then((data) => {
    //         console.log(data); // JSON data parsed by `response.json()` call
    //     });
     //return allContacts.filter(user => user.title.toLowerCase().includes(text.toLowerCase()))



     return new Promise(resolve => {
          const time = (Math.random() + 1) * 250;
          setTimeout(() => {
              console.log('reading...');
              const filteredUsers = allContacts.filter(user => user.title.toLowerCase().includes(text.toLowerCase()));
              //resolve(filteredUsers);
              this.setState({
                  filteredUsers
              });                    
          }, time) ;
      });

  }

  componentDidMount() {
    // fetch("https://randomuser.me/api/?format=json&results=10")
    //   .then(res => res.json())
    //   .then(json => this.setState({ contacts: json.results }));

    fetch('cd_catalog.json', { //https://www.w3schools.com/xml/cd_catalog.xml
        mode: 'no-cors',
        'content-type': 'application/json'//'text/html'
    })
    .then(response => {
        // response.text().then(text => {
        //   // handle response content
        //   var t = new window.DOMParser().parseFromString(text, "text/xml")
        //   console.log(t)
        // })
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        console.log(data)
    })
    .catch(err => {
        // Do something for an error here
    })
    //.then(response => console.log(response.text()))
    //.then(str => (console.log(str))) //new window.DOMParser()).parseFromString(str, "text/xml")
    //.then(data => {  console.log('test1'); console.log(data) })
  }

}    

class ContactList extends React.Component {
  render() {
      const {lista, tytul} = this.props;  
      if (lista.length > 0) {      
          return(
              <div>
                  <ul className="ui relaxed divided list selection">      
                      {lista.map((item, inx) => (
                          <ContactItem id={item.id} tytul={item.title} opis={item.desc} />       
                      ))}
                  </ul>
              </div>
          );
      } else {
          return <p>No results!</p>;
      }
  }
}

class ContactItem extends React.Component {
  render() {
      const { id, tytul, opis } = this.props
      const imgUrl = "https://api.adorable.io/avatars/55/";
      return (
          <li value={id.toString()} key={id.toString()} className="item" onClick={this.onClickHandler}>
              <img src={imgUrl} className="ui mini rounded image" />
              <div className="content">
                  <h4 className="header">Nr {id} {tytul}</h4>
                  <div className="description">{opis}</div>
              </div>                
          </li>
      )
  }
  onClickHandler(e) {
      console.log(e.currentTarget.value);
  }
}

var allContacts = [
  {id: 1, title: 'Darek', desc: 'aaa'},
  {id: 2, title: 'Anna', desc: 'bbb'}, 
  {id: 3, title: 'Celina', desc: 'ccc'},
  {id: 4, title: 'Dawid', desc: 'ddd'}
];

export default App;
