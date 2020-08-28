class Git {
    constructor(name) {
        this.name = name;
        this.lastCommitId = -1;
        this.branches = [];

        var master = new Branch("master", null);
        this.branches.push(master);

        this.HEAD = master;
    }

    commit(message) {
        var commit = new Commit(++this.lastCommitId, this.HEAD.commit, message);

        this.HEAD.commit = commit;

        return commit;
    }

    checkout(branchName) {
        for (var i = this.branches.length; i--;) {
            if (this.branches[i].name === branchName) {
                this.HEAD = this.branches[i];

                return this;
            }
        }
        var newBranch = new Branch(branchName, this.HEAD.commit);

        this.branches.push(newBranch);

        this.HEAD = newBranch;

        return this;
    }

    log() {
        var commit = this.HEAD.commit, history = [];

        while (commit) {
            history.push(commit);
            commit = commit.parent;
        }
        return history;
    }
}