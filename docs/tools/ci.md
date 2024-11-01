# CI (Continuous Integration) with GitHub Actions
The Continuous Integration is an automated process that verifies and validates the source code automatically with each modification in the repository (push or pull request). It enables quick error detection before the code is merged into the branch.

<div style="display: flex; justify-content: center;">
<img src="/tools/ci/ci-diagram.png" alt="Diagram representing the process of a CI" class="small-image" />
</div>

## GitHub Actions
Will we be using `GitHub Actions` to implement a CI into a Github repository. But first, what is Github Actions?

GitHub Actions is a `CI/CD (Continuous Implementation and Continuous Deployment) tool` integrated directly into `GitHub`, allowing developers to `automate tasks and workflows` around their code. With this tool, you can build, test, and deploy your code automatcally is response to events in the repository, such as pushes, pull requests, etc.

## CI Implementation

:::info
In this note, we will follow the example of implementing a CI that will run a linter over the code, to check any type error or such. But this example applies for any kind of CI! You will just need to adapt your needs.
:::

### Creating a the CI file
First of all, you will need to create the `.github` folder, with its `workflows` subfolder:
<div style="display: flex; justify-content: center;">
<img src="/tools/ci/ci-folders.png" alt="Screenshot representing the folders .github and workflows" class="small-image" />
</div>

After creating your two folders, you can create any `YAML file`, for example, let's create a `swiftlint.yml` file, so when my CI starts, it will lint the entire code and check for errors.
<div style="display: flex; justify-content: center;">
<img src="/tools/ci/ci-swiftlint.png" alt="Screenshot representing the folders .github and workflows" class="small-image"/>
</div>

So, what's happening here? When you will interact with your repo (e.g pushing the code), GitHub Actions will check if there is any `.github/workflows` folder. If so, it will automatically run the YAML file inside. This means you can create different YAML files to run different jobs such as unit test, lint, etc.
:::warning 
Double-check your YAML indentation! YAML syntax is sensitive to spaces, so each level of indentation must be consistent. Even a small indentation error can cause the CI workflow to fail unexpectedly. Make sure each nested element aligns correctly, especially under jobs, steps, and other sections. 
:::

### swiftlint.yml
Let's dive into this file, and see the different steps we need to do.
<div style="display: flex; justify-content: center;">
<img src="/tools/ci/ci-yaml.png" alt="Screenshot representing the folders .github and workflows" class="small-image" />
</div>

Let's break this down:
* The `name` parameter corresponds to the name of your CI.
* **Triggers**
  * `on` defines when the CI is triggered.
    * `push`: each time you push code to the `main` branch, the CI is activated.
    * `pull_request`: each time you PR is opened or updated towards the `main` branch, the CI is triggered.
* **Jobs**
  * `jobs` defines a set or tasks executed in the workflow.
    * Here, the job is named `lint`, meaning it will perform code checks.
    * `runs-on` will tell the CI to run on a recent macOS environment.
::: danger
Careful! I am using the macOS environment since Swift is specific to macOS, it needs to run on a compatible system. You can use ubuntu-latest for any other kind of system!
:::
* **Steps**
  * `steps` are the different milestones it's going to take in order to run the job.
    * Here, for each step, you got a name, and the action the CI will do.
:::warning
Even though SwiftLint doesn't need Node.js, this step garantees that the environment uses Node.js in case of tools or dependencies that will need it.
:::
