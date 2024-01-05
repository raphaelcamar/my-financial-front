const sendPostMessage = () => {
  console.log('Teadas');
  document.getElementById('teste').contentWindow.postMessage('Teste', '*');
};

const getPostMessage = () => {
  // TODO
  window.addEventListener('message', e => {
    if (!e.data?.source?.includes('react')) {
      console.log(e.data);
    }
  });
};
sendPostMessage();
getPostMessage();
