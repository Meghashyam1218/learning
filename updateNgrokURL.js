import { exec } from 'child_process';
import fs  from 'fs/promises';
import fetch  from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

// Step 1: Start ngrok and wait for it to initialize
exec("C:/Users/all_users/Downloads/ngrok http 3000", async (error) => {
  if (error) {
    console.error(`Error starting ngrok: ${error}`);
    return;
  }
  console.log("Hello");
  // Step 2: Fetch the public URL from ngrok's local API
  try {
    const response = await fetch('http://127.0.0.1:4040/api/tunnels');
    const data = await response.json();
    console.log(data)
    const ngrokURL = data.tunnels[0].PublicURL;

    console.log(`New ngrok URL: ${ngrokURL}`);

    // Step 3: Update the .env file with the new ngrok URL
    let envData = fs.readFileSync('.env', 'utf8');
    envData = envData.replace(/NGROK_URL=.*/g, `NGROK_URL=${ngrokURL}`);
    fs.writeFileSync('.env', envData, 'utf8');

    console.log('.env file updated with new ngrok URL');

    // Step 4: Git add, commit, and push the updated .env file to GitHub
    // exec('git add .env && git commit -m "Update ngrok URL" && git push', (err) => {
    //   if (err) {
    //     console.error(`Error pushing to GitHub: ${err}`);
    //   } else {
    //     console.log('Updated .env file pushed to GitHub');
    //   }
    // });
  } catch (error) {
    console.error(`Error fetching ngrok URL: ${error}`);
  }
});