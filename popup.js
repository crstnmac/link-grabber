document.getElementById('extractLinks').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
  chrome.tabs.sendMessage(tab.id, {action: 'extractLinks'}, (response) => {
    const linksDiv = document.getElementById('links')
    linksDiv.innerHTML = ''
    response.links.forEach((link) => {
      const a = document.createElement('a')
      a.href = link
      a.textContent = link
      a.target = '_blank'
      linksDiv.appendChild(a)
      linksDiv.appendChild(document.createElement('br'))
    })
  })
})
