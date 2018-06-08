# Day2 Hair

Day2 is a simple hairstyle recommender for times when you need a little inspiration. Style options can change depending on the length of one's hair, and how long it's been since the last wash. Day2 allows the user to create an account, and filter styles by length and clean/dirty status. Once the filtered results are displayed the user can 'favorite' a style to view later.

The project was created for my wife who often goes a day or two between hair washings. Since she needs to look professional and fashion forward for her job, coming up with new styles everyday can be a chore. With Day2 one can spend less time searching Pinterest in the morning for inspiration and get styling faster!

## A deployed version of the app can be found here:
http://sad-wozniak-c0f22c.netlify.com/

## Screenshots
![Day2 Landing Page](https://c2.staticflickr.com/2/1734/28804601858_f14d2bb842_o.jpg)
![User signed-in page](https://c2.staticflickr.com/2/1743/27809183957_eb6c476059_o.jpg)

## Tech Used

### Front-End
-   React
-   Redux
-   HTML
-   CSS

### Back-End
-   Node
-   Express
-   MongoDB
-   Mongoose
-   Passport
-   Bcrypt

### Testing and Deployment
-   Mocha
-   Chai

### Deployment
-   Heroku
-   mLab
-   Netlify

## Running Locally
### Backend
-   Clone the backend repository:  `git clone https://github.com/neillsom/day2-server.git`
-   Move into the project directory:  `cd day2-server`
-   Install the dependencies:  `npm install`
-   Run the development task:  `npm start`
    -   Starts a server running at  [http://localhost:8080](http://localhost:8080/)
### Frontend
- Clone the frontend repository: `git clone https://github.com/neillsom/day2-client.git`
- Move into the project directory:  `cd day2-client`
-   Install the dependencies:  `npm install`
-   Run the development task:  `npm start`
    -   Starts a server running at  [http://localhost:3000](http://localhost:3000/)

## Resources
### Users (/users)
-   GET
    -   Get user favorites
-   POST
    -   Register new user
### Auth (users/login)
-   POST
    -   Login existing user and returns an authToken
### Styles (/styles)
-   GET
    -   Unfiltered results if not logged in

### Add to favorites (users/:id/favorites)
- GET
  - Filtered favorites returned
- PUT
  - Pushes style ID to user favorites list

## Code Examples

### Users Schema with authentication
```javascript
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  fullname: {type: String, default: ''},
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: {
    type: Array
  }
});

UserSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
  }
}

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', UserSchema);
```

### Signup
```javascript
import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'

export class Signup extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    this.props.dispatch(registerUser(username, password))
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="username"/>
          <input type="password" name="password"/>
          <button>Signup</button>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);
```
