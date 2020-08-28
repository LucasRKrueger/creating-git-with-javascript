var git = new Git("test");

var log = new Log();

git.commit("Initial commit");
console.log(log.Commit(git.HEAD.commit.message, git.HEAD.name))

git.commit("Change 1");
console.log(log.Commit(git.HEAD.commit.message, git.HEAD.name))

console.assert(log.HistoryCommitId(git.log()) === "1-0");
console.log()

git.checkout("test checkout");
console.log(log.Checkout(git.HEAD.name))

git.commit("Change 3");
console.log(log.Commit(git.HEAD.commit.message, git.HEAD.name))

console.assert(log.HistoryCommitId(git.log()) === "2-1-0");

git.checkout("master");
console.log(log.Checkout(git.HEAD.name))

console.assert(log.HistoryCommitId(git.log()) === "1-0");