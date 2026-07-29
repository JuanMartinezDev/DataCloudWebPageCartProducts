(function () {
  function getPageContext() {
    return {
      url: window.location.href,
      title: document.title,
      pathname: window.location.pathname
    };
  }

  function connect() {
    window.SalesforceInteractions = window.SalesforceInteractions || {};

    if (typeof window.SalesforceInteractions.init === 'function') {
      window.SalesforceInteractions.init();
    }

    window.__salesforceSitemapConnected = true;
    window.__salesforceSitemapContext = getPageContext();

    console.info('[sitemap.js] conectado a SalesforceInteractions', window.__salesforceSitemapContext);
  }

  function disconnect() {
    window.__salesforceSitemapConnected = false;
    console.info('[sitemap.js] desconectado');
  }

  window.SalesforceInteractionsSitemap = {
    connect,
    disconnect,
    getPageContext
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', connect, { once: true });
  } else {
    connect();
  }
})();
