# Git Commit Guide

Here are the basic steps to commit your files:

1. Check the status of your files:
```bash
git status
```

2. Add files to the staging area:
- Add specific file:
```bash
git add filename
```
- Add all modified files:
```bash
git add .
```

3. Commit the staged files:
```bash
git commit -m "Your commit message"
```

4. Push the changes to remote repository:
```bash
git push origin branch-name
```

Additional useful commands:

- View commit history:
```bash
git log
```

- Check differences before committing:
```bash
git diff
```

- Create and switch to a new branch:
```bash
git checkout -b new-branch-name
```

Remember to:
- Write clear commit messages
- Commit related changes together
- Commit often
- Don't commit unfinished work
