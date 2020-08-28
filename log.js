class Log {    
    Commit(commitMessage, commitBranch){
        return `You commited "${commitMessage}" on "${commitBranch}"`;
    }

    Checkout(branch){
        return `Switched to "${branch}" `;
    }

    HistoryCommitId(history){
        var ids = history.map((commit) => {
            return commit.id;
        });
        return ids.join("-");
    }
}