# Ways to contribute to IOTA Documentation

## Write new content

1. See [open issues](https://github.com/iotaledger/documentation/issues).
2. Filter by the `Help Wanted` label.
3. Pick something that you'd like to work on.
4. Comment on the issue that you'd like to work on.
5. [See our writing guide](#writing-guide).
6. [See how to work with GitHub and Git](#Use-GitHub-and-Git).

We'll be adding more of these issues in the coming weeks as we identify more content to be added.

Use our [Discord](https://discordapp.com/invite/fNGZXvh) to join the discussion in the #Documentation channel and ask questions.

Thanks! :heart:

## Writing guide

If you are creating or editing an article, please follow our writing guide to help us do the following:

* Create and maintain a consistent tone of voice 
* Offer documentation in a standard format
* Make our documentation straightforward to read for non-native English readers
* Make sure that our documentation educates our readers

### File format

We use markdown for documentation files. Please refer to these [tips](https://help.github.com/articles/basic-writing-and-formatting-syntax/) if you haven't used markdown before.

### Writing tools

We recommend using a code editor that supports markdown files, for example [Visual Studio Code](https://code.visualstudio.com/) with the [markdown Lint extension](https://github.com/DavidAnson/vscode-markdownlint).

### General rules

| Rule | Example |
| :----| :-------|
| Never use a long word where a short one will do| '~~Utilize~~ **Use** short words'|
|If it's possible to remove a word, always remove it | 'This method is ~~exactly~~ the same as the previous one'
| Always use the active voice where possible | '~~The active voice must always be used where possible~~.' 'You must always use the active voice where possible.'
| Never use a foreign phrase, a scientific word or a jargon word if you can think of an everyday English equivalent | ~~E.g~~ For example

Research shows that the above holds true even for very technical audience. See the [GOV.UK style guide](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) for example.

### UK English or US English?

We always write in US English.

### Punctuation

* Never use semicolons
* Always use a capital letter after colons
* Always use an oxford comma (comma before and in a list, for example 'The mainnet, testnet, and devnet networks')
* Don't use periods at the end of single sentence lists. Use periods only when list items consists of more than one sentence

### Article titles

| Rule | Example |
| :----| :-------|
|Use sentence case for titles. Do not use title case.|'The distributed ledger', not 'The Distributed Ledger'|
|Article titles in the 'Concepts' sections should always be nouns|'Tip selection' not 'What is tip selection?' or 'Understanding tip selection'|
|Article titles in the 'How to guides' section should always start with a gerund| 'Troubleshooting the IRI' not 'Common issues in the IRI'|
|Article titles in the 'References' section should always be plural nouns| 'IRI configuration options' not 'IRI configuration' or 'Configuring the IRI'|

### How-to guides

A how-to guide is an article that helps users achieve a task.

When you write how-to guides, follow these general guidelines:

* [Write one task per article](#write-one-task-per-article)
* [Create subtasks to organize long how-to guides](#create-subtasks-to-organize-long-how-to-guides)

Each how-to guide should explain not only **how** to perform the scenario, but also **why** a user would want to perform the scenario. What does it achieve? Why is it needed?

A brief introduction in the form of a **what** is the scenario about. A **when** section to put the scenario in context with other scenarios. For example, a scenario on **Running IRI** should mention that you need to **Download and install IRI** first.

The general flow of a how-to guide would be:

1. A short description (overview of the task, benefits and importance of the task, brief conceptual information, and links to longer conceptual information, if necessary)
3. Prerequisites (things that the user must have or do before they can complete the task)
4. Steps (how to do the task)
5. Summary of what the user has accomplished

#### Write one task per article

When a how-to guide contains one task, it's easier to manage, organize, and reuse to help users find specific tasks when they need them.

For example, don't combine the tasks for installing and uninstalling software in a single article. Users typically won't need these tasks at the same time.

#### Create subtasks to organize long how-to guides

Tasks that are more than 10 steps can be difficult to follow, especially if they're complicated and include substeps.

If you start writing a task that contains more than 10 steps, separate the task into subtasks by using headings.

### Concept articles

Concept articles can be written to do any of the following:

* Describe a system, product, or solution
* Introduce tools and technology
* Explain features, components, characteristics, restrictions, and capabilities
* Define terms in more details than you would find in a glossary
* Describe benefits or help users to make choices between options

You should write concept articles to support tasks and user goals.

Concept articles must not include task information or reference information.

### Code formatting

When adding code examples and snippets into an article, make sure you format it accordingly and add language identifiers for correct code highlighting. See [Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for more information.

## Use GitHub and Git

If you are familiar with Git and GitHub and know how to create a PR from your own fork of this repo, you can just skip to [our writing guide](#writing-guide).

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

- A new documentation article - this will be a single markdown (.md) file.
- Grammar edits and spelling corrections on an existing article

#### Create a new branch

1. Open GitBash.
2. Type `git pull upstream master:<your branch name>` at the prompt and press `Enter`.
3. Type `git push origin <your branch name>` at the prompt. This let's the GitHub repository know of the branch.
4. Type `git checkout <your branch name>` to start working on your local copy of the branch.

#### Edit and add documentation content

1. Please see our [writing guide](#writing-guide) before you start writing and editing articles.
2. Edit the content.
3. When you are done, type the following in the prompt:
```cmd
git add .
```
Note:  you may be asked to set your account's default identity
```
Please tell me who you are
Run 
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
Then, continue committing your changes
```
git commit -v -a -m "<Describe the changes you made>"
```
4. Make any additional changes to the same file/s in subsequent commits as you work. Not all changes need to be in the same commit.

#### Submit a pull request to the Documentation repository for review

When you're finished editing the content:

1. Type `git push origin <your branch name>` at the command prompt.
2. In GitHub, go to the repository that you forked from `iotaledger/documentation`.
3. Click the **Pull Request** button at the top of the page.
4. Ensure that the Base branch is `iotaledger/documentation@master` and the Head branch is `<your username>/documentation@<your branch name>`.
5. Click the **Update Commit Range** button or the **Compare & pull request** button.
6. Give your pull request a Title, and describe all the changes you're making.
7. Submit the pull request.

Thank you! We will now process your pull request. If there are any edits to make, we will ask you in comments on the pull request you created. 

You can always just `commit` and `push` new changes like you did before and they will show up in the pull request.
