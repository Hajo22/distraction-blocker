const blockedSites = [
    "youtube.com",
    "facebook.com",
    "instagram.com",
    "tiktok.com",
    "reddit.com",
    "x.com"
];
  
const redirectUrl = "https://medium.com";
  
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status !== "complete") return;
  
    const url = new URL(tab.url);
    const isBlocked = blockedSites.some(site => url.hostname.includes(site));
  
    if (isBlocked) {
      chrome.tabs.update(tabId, { url: redirectUrl });
    }
});
