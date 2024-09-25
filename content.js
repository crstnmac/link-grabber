chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractLinks') {
    const links = Array.from(document.getElementsByTagName('a'))
      .map((a) => a.href)
      .filter((href) => href.startsWith('http'))
    sendResponse({links})
  }
})
