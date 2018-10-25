# Ways to contribute to IOTA Documentation

## Write new content

1. See [open issues](https://github.com/iotaledger/documentation/issues).
2. Filter by the `Help Wanted` label.
3. Pick something that you'd like to work on yourself.
4. Comment on the issue that you'd like to work on this.
5. [See how to write and format content](#how-to-write-and-format-content).
6. [See how to work with GitHub and Git](#Use-GitHub-and-Git).

We'll be adding more of these issues in the coming weeks as we identify more content to be added.

Use our [Discord](https://discordapp.com/invite/fNGZXvh) to join the discussion in the #Documentation channel and ask questions.

Thanks! :heart:

## How to write and format content

If you are creating a new article, or editing a new one, there are some general stylistic rules to stick to. This ensures the documentation is consistent across the whole site.

### Language

We like to follow some simple rules when writing new documentation:

- Short sentences
- Headers with sub-headers to divide sections
- Simple vocabulary. Using complicated words makes the learning experience more difficult.

Research shows that the above holds true even for very technical audience. See the [GOV.UK style guide](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) for example.

### Use a suitable code editor

We recommend using a code editor that supports `MarkDown` files. One candidate is [Visual Studio Code](https://code.visualstudio.com/) with the [MarkDown Lint extension](https://github.com/DavidAnson/vscode-markdownlint).

### Basic MarkDown syntax

We use MarkDown for documentation files. Please refer to [Writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/) if you haven't used MarkDown before. Formatting MarkDown can take some time getting used to, but when its basic rules are followed, the formatting is much more predicatble then when using standard WYSIWYG editors in content management systems.


### Describe the What, the Why, When, and the How in each article

Each article that covers a specific scenario should explain not only **how** to perform the scenario, but also **why** a user would want to perform the scenario. What does it achieve? Why is it needed?

A brief introduction in the form of a **what** is the scenario about. A **when** part to put the scenario in context to other scenarios that might tie into it is also useful. For example, a scenario on **Running IRI** should mention that you need to **Download and install IRI** first.

The general flow of a docuemntation article would be:

1. What
2. Why and When
3. How (this will often be the longest part)
4. Summary of what the user has accomplished

### Use lists for steps and clarity

When writing steps for users to follow, make sure you divide them into steps like this:

1. Open a file.
2. Put in this code.
3. Run the code.
4. View the results.

Each line should be an individual step. Each scenario should be 7-9 steps tops. If your scenario gets longer, consider splitting it up using headers. For example, the above could be split like this:

**Writing the code**

1. Open a file.
2. Put in this code.

**Executing the code and viewing results**

1. Run the code.
2. View the results.

Using steps makes articles much more readable. Same goes for any text in general, when you're listing out options, for example, it's best not to have them in a paragraph but use lists instead. 

- Option 1
- Option 2
- Option 3

### Code formatting

When adding code examples and snippets into an article, make sure you format it accordingly and add language identifiers for correct code highlighting. See [Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for more information.

## Use GitHub and Git

If you are familiar with Git and GitHub and know how to create a PR from your own fork of this repo, you can just skip to [Writing and formatting content](#how-to-write-and-format-content).

### Setting up your fork of the repository

1. Create a new GitHub account if you don't have one yet.
2. Set up your computer with Git. Follow the instructions in the [Setting up Git Tutorial](https://help.github.com/articles/set-up-git/).
3. Create your own fork of this repository. Use the **Fork** button at the top of the page.
4. Copy your fork to your local machine. Use GitBash or any other command prompt and enter:

```cmd
git clone https://github.com/{your user name}/documentation
```

Next, create a reference to the root repository by entering these commands:

```cmd
cd documentation
git remote add upstream https://github.com/iotaledger/documentation.git
git fetch upstream
```

You only need to do the above once!

### Work with branches to contribute content

Branches help make contributing seamless. Make sure each branch only addresses one concept/article to make adding the changes to the documentation repository as easy as possible. The following types of contribution are appropriate for a new branch:

- A new documentation article - this will be a single MarkDown (.MD) file.
- Grammar edits and spelling corrections on an existing article

#### Create a new branch

1. Open GitBash.
2. Type `git pull upstream master:<your branch name>` at the prompt and press `Enter`.
3. Type `git push origin <your branch name>` at the prompt. This let's the GitHub repository know of the branch.
4. Type `git checkout <your branch name>` to start working on your local copy of the branch.

#### Edit and add documentation content

1. Please see [How write and format content](#how-to-write-and-format-content) before you start writing and editing articles.
2. Edit the content.
3. When you are done, type the following in the prompt:
```cmd
git add .
git commit -v -a -m "<Describe the changes you made>"
```
4. Make any additional changes to the same file/s in subsequent commits as you work. Not all changes need to be in the same commit.

#### Submit a pull request to the Documentation repository for review

When you're finished editing the content:

1. Type `git push origin <your branch name>` at the command prompt.
2. In GitHub, go to the repository that you forked from `iotaledger/documentation`.
3. Click the **Pull Request** button at the top of the page.
4. Ensure that the Base branch is `iotaledger/documentation@master` and the Head branch is `<your username>/documentation@<your branch name>`.
5. Click the **Update Commit Range** button.
6. Give your pull request a Title, and describe all the changes you're making.
7. Submit the pull request.

Thank you! We will now process your pull request. If there are any edits to make, we will ask you in comments on the pull request you created. 

You can always just `commit` and `push` new changes like you did before and they will show up in the pull request.