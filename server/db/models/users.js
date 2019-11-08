const { User } = require('../index');

const userModel = {
  async getUserByEmail = ( { email }) => {
    const userData = await User.find({ email });
  }
}

module.exports = userModel;