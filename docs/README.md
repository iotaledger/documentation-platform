# Structure

## projects.md

The `projects.md` file contains the top level navigation project names and links, it used in the following locations.

* Home page floating menu
* Footer
* Burger menu navigation

The order of the items in the file also determines the order in the navigation.

An item will only appear in the navigation if the corresponding subfolder for that project also contains a `home.md`. The links are relative to the location of `projects.md`.

The content of the file is a list of Markdown links.

```markdown
[Getting Started](/getting-started)
[IOTA Basics](/iota-basics)
```

## home.md

This file contains the content displayed on the home page. The file contains a level 1 header which determines the description for that section. In addition there are links followed by level 2 header which contain the direct links into the content.

The description can contain any valid markdown.

The links should be relative to the location of the `home.md` file.

```markdown
# Description for project

[Item 1](/0.1/overview.md)
## An overview of the project

[Item 2](/0.1/concepts.md)
## Learn about the basic ideas and concepts
```

## Version folders

Under each project folder we have folders that are the version numbers for the content. If there is more than one version, the documentation site will show the version picker.

Each folder contains all of the content required for that project version. In addition the folder should contain a `doc-index.md` which contains the items that you want to appear as the left hande toc for the project.

The file contains markdown links which are relative to where the `doc-index.md` is located.

```markdown
[Overview](/overview.md)
[Concept](/concept.md)
[Sub Item 1](/items/sub-item-1.md)
[Sub Item 2](/items/sub-item-2.md)
```

If you want to link to a top level project outside of the scope of your content you should format the link as follows.

```markdown
[Another Project](root://another-project/0.1/some-content.md)
```