*Note: this is an outline and does not contain every change. Check the commits for a full list of changes.*

## 0.8.0 - Search & new UI 🔍 (2019-10-21)

### Additions
- Custom wrapper for Socket.io
- Added option to hide specific servers
- Added search for servers and players
- Use OS theme when one is not selected
- Copy to clipboard button on server page
- Player list server column addded to settings
- Settings reset button

### Changes
- Updated help page
- Shimmer effect when servers are loading
- Updated checkbox
- Dropdown for theme selection
- Redesigned UI

### Fixes
- Build error in settings page
- GitHub icon not changing color with theme
- Navigation bar overflowing on mobile
- Server page header not sticking
- SSR error

## 0.7.0 - Server page redesign ✨ (2019-9-30)

### Additions
- Server and player data is now cached
- Remember last sorted field for tables
- Added banner image to server page

### Changes
- GitHub link now goes directly to bzlist.net project
- Removed old account button
- Moved version number to navigation bar
- Adjusted new table hover effect
- New logo
- Updated server page design
- Updated button design
- Updated splashscreen

### Fixes
- Fixed team sorting getting messed up
- Fixed settings page
- Fixed typo in README

## 0.6.0 (2019-9-19)

- Improved service worker
- Use Socket.io instead of Firebase for data
- Improved performance

## 0.5.1 (2019-8-17)

- Improved UI
- Make back button actually go back
- Fixed server list going crazy when updating
- Fixed servers in grid view not being sorted
- Added loading spinner messages
- Added experimental table look
- Added setting to only show servers with players
- Updated footer
- Added version number to help page
- Cleaned up code

## 0.5.0 - Sorting just arrived 📃 (2019-8-6)

- Add midnight theme
- Higher contrast badges
- Add team information to server details page
- Only show button the join teams that exist
- Add sorting to all tables (servers, players, teams)
- Improved security
- Add number of online observers to server list

## 0.4.0 - Players are here! 🦸‍ (2019-7-28)

- Add button to launch BZFlag and join server
- Add dedicated players page
- Don't show player tk column on no tk servers
- Updated to Angular 8 with Ivy (improved performance)
- Add setting to toffle player motto
- Add a few FAQ Q&As
- Performance improvments

## 0.3.4 (2019-6-17)

- Fixed bold text being blurry
- Removed animation when switching pages
- Add back button to server page
- Increased headline font size on mobile
- Disabled checkboxes are now grey
- Improved server list performance

## 0.3.3 (2019-6-15)

- time-ago pipe auto update
- Travis CI build checking
- Custom checkboxes
- Updated look
- Removed Angular Material

## HOTFIX: 0.3.21 (2019-5-7)

- Fix component name `servers` (now `app-servers`) in home page

## 0.3.2 (2019-5-7)

- Added server online/offline status
- Updated footer
- Various slight tweaks to look
- Updated linting configuration

## 0.3.1 (2019-4-30)

- Added server side rendering
- Added Open Graph and Twitter meta tags
- Updated loading screen

## 0.3.0 - User accounts 👨‍💼 (2019-4-23)

- Added meta tags
- Change title on different pages
- Hide server list table column settings when using grid view
- Added user accounts
- Improved responsiveness
- Light and dark theme colors
- Handle tables being compact automatically
- Store settings in local storage instead of cookies
- Updated home page
- Removed dedicated 3rd party licenses page

## 0.2.1 (2019-4-20)

- Hide GitHub button in navigation bar when on mobile
- Use grid view on mobile
- Use ngsw instead of sw-precache
- Updated Badges look
- Improved and responsive server details page
- Updated Help page
- Updated Home page

## 0.2.0 - UX + Dark Mode 🌑 (2019-4-18)

- Added Settings page
- Dark theme/mode
- Grid view
- Major update to how tables look
- Removed old API code
- Removed search box

## 0.1.0 - Fire Update 🔥 (2019-4-17)

- Added `webpack-bundle-analyzer` tool
- Server details on dedicated page
- Real-time information
- Page switching animation
- `package.json` to be more friendly and have more options
- Firebase as backend/database
- Fixed server list sorting not always being correct
- Broke sorting tables

## 0.0.2 (2019-4-16)

- Added logo
- Added GitHub link
- HTTP request error handling
- Time formatting
- Added Loading spinner
- Added Budgets to angular.json
- Changelog
- Updated Look
- Removed Score data for observers
