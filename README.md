React UI and Node CLI for aggregating and visualizing WMATA usage history, as tracked by the user's registered SmartTrip card. The UI is deployed at https://jpblair.github.io/smarttrip. This repository includes:
- Browser console script to download multiple months of usage history data from the WMATA SmartTrip website.
- Node.js CLI to aggregate and parse the downloaded CSV files from WMATA into a ranked list of most used rail stops and bus lines.
- React UI to visualize the aggregated data, either directly using the downloaded CSV files, or the output of the Node.js script. The data can be visualized as:
  - A ranked list of most used rail stops, with individual visits listed on mouseover
  - The rail system map, with individual visits listed on mouseover
  - A line chart with one line per stop, showing the increase in cumulative visits over time
 
Note: due to the landscape orientation of the system map and line chart, the React UI is best viewed on desktop.

## Screenshots

_Screenshots use randomized sample data._
<img width="746" height="743" alt="image" src="https://github.com/user-attachments/assets/4280e8cb-1246-444f-9152-c61fb669ed9c" />
<img width="973" height="767" alt="image" src="https://github.com/user-attachments/assets/3d068766-25bf-4e47-bab6-be1138ff8de8" />
<img width="1911" height="773" alt="image" src="https://github.com/user-attachments/assets/c7a23faf-0731-4233-9466-69c33fe25019" />

## Downloading usage history data from WMATA

WMATA offers usage history data in CSV format on the SmartTrip website, split into monthly files. These are stored for two years before expiring. You can either manually download these files through their website UI, or use the script included in this repository to download multiple months of data at once.

1. Navigate to your WMATA SmartTrip Account Summary.
2. Click the card that you want to download data for.
3. Navigate to History > Use History on the right side of the screen.
4. Open the browser console and paste in the contents of [cli/script/download.js](https://github.com/jpblair/smarttrip/blob/main/cli/script/download.js).
5. Note the value of `NUM_MONTHS` on the first line. This determines how many months backward of data to download, not including the current month. The default value of 25 reflects the maximum that WMATA stores before expiring. You can reduce this value on subsequent runs to only include new data since your last download.
6. Hit Enter to run the script. It generates download URLs for each month of data, in CSV format. The script tries to open the URLs with `_blank`, but if your browser or browser extensions prevent this, they are also printed as links that you can click to initiate each download.
7. Repeat from Step 2 for any additional cards.

Once you've gathered all of the files, you can directly upload them to the React UI using the Import Data button and default mode, or parse them locally using the Node CLI.

## Running the Node CLI

1. Make sure Node 26 is installed on your system.
2. Change into the `cli` directory.
3. Run `npm install` to install all dependencies.
4. Copy all of the downloaded CSV files into `data`.
5. Run the script with `node ./parser.js`.
6. The script will print data to the console and also output `visitsPerStop.json`. You can load this into the React UI using advanced mode in the Import Data modal.
