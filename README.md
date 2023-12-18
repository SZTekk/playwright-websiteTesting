# Website Testing using Playwright

Playwright is an open-source automation framework designed for testing web applications. It allows developers and testers to automate browser actions, facilitating efficient and reliable testing of web functionalities. In this guide, we'll walk you through the process of installing Playwright in Visual Studio Code using extensions and setting up a Playwright project.

## Step 1: Install Visual Studio Code

If you haven't installed Visual Studio Code (VS Code) yet, download it from the official website: [Visual Studio Code Download](https://code.visualstudio.com/download).

## Step 2: Open Visual Studio Code

Launch the Visual Studio Code application on your computer.

## Step 3: Go to Extensions

Navigate to the Activity bar located on the left side of Visual Studio Code.

![Activity Bar](https://i.imgur.com/fBTAZXr.png)

Now, navigate to the Extensions view by clicking on the Extensions icon located on the Activity Bar on the side of the window (depicted as four connected squares).

![Extensions Icon](https://i.imgur.com/Zz6zgYW.png)

## Step 4: Search for Playwright Extension

In the Extensions view, type "Playwright" in the search bar.

![Search for Playwright](https://i.imgur.com/YWYlpMC.png)

## Step 5: Install Playwright for VS Code

Locate the "Playwright Test" extension in the search results and click the "Install" button.

![Install Playwright](https://i.imgur.com/hknZ7Cg.png)

## How to Install Docker and Set Up MetaBase on Docker

1. Go to the Docker website and download the desktop version: [Docker Desktop](https://www.docker.com/products/docker-desktop/).

2. Install the Docker setup.

3. Press the Windows button and search for Command Prompt, then open it.

4. Before running these commands make sure docker is running. 

5. Type the following command in the Command Prompt: `docker pull metabase/metabase:latest`

6. Run this command: `docker run -d -p 3000:3000 --name metabase metabase/metabase`.

7. After this go to this site [localhost](http://localhost:3000/) and create an account with email "test@gmail.com" and password "testing14" 

## How to Set Up a Playwright Project

1. Open Visual Studio Code.
2. Open a folder by navigating to the top bar, selecting "File," and choosing "Open Folder."
3. Select your desired folder for your project.

![Folder](https://i.imgur.com/61DDTXE.png)

4. Press `Ctrl + Shift + P` to open the command palette anywhere in Visual Studio Code.
5. In the command palette, type "Playwright" and select "Test: Install Playwright."
6. A pop-up will appear; check all the boxes and press "OK." Wait for the project to finish setting up; this may take some time.
7. After the project is completed, right-click on the "tests" folder and create a new file (e.g., `test.spec.js`).
8. Write a basic test case inside this file, as provided in the Playwright GitHub repository.

## How to Run Test Cases

1. Select the bottle option from the activity bar

![Test Runner](https://i.imgur.com/fBTAZXr.png).

3. Select the referesh option at the top of the panel on the left side.
  
![Referesh](https://i.imgur.com/L7dWVIi.png).

3. Click run all option to run the test cases.

![Run](https://i.imgur.com/L7dWVIi.png).

## Note
Make sure Docker is running metabase to pass all the GUI test cases

Happy Testing!
