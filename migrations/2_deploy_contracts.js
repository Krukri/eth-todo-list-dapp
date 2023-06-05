const TodoList = artifacts.require("TodoList"); // might change the path for TodoList to ./Migration.sol

module.exports = function (deployer) {
  deployer.deploy(TodoList);
};
