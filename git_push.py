from git import Repo


def push(repo_path):
    repo = Repo(repo_path)
    print(repo)
    print("To Update", [item.a_path for item in repo.index.diff(None)])
    for filename in repo.untracked_files:
        print("commit {}".format(filename))
        repo.git.add(filename)
        repo.git.commit('-m', 'update {}'.format(filename),
                        author='pierre-alexis.blond@live.fr')
    repo.git.push('origin', "master")


if __name__ == '__main__':
    push(repo_path="")
