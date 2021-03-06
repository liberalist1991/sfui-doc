import Vue from 'vue';

function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const interval = () => {
    if (iframe.contentWindow.changePath) {
      callback();
    } else {
      setTimeout(() => {
        interval();
      }, 50);
    }
  };

  if (doc.readyState === 'complete') {
    interval();
  } else {
    iframe.onload = interval;
  }
}

export default function(router) {
  router.afterEach(() => {
    window.scrollTo(0, 0);
    Vue.nextTick(() => syncPath());
  });

  window.vueRouter = router;
}

function syncPath(dir) {
  const router = window.vueRouter;
  const isInIframe = window !== window.top;
  const currentDir = router.history.current.path;
  if (!isInIframe) {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.changePath(currentDir);
      });
    }
  } else if (isInIframe) {
    window.top.changePath(currentDir);
  }
};

window.changePath = function (path = '') {
  window.vueRouter.replace(path);
};
