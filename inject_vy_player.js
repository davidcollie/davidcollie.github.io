<script type='text/javascript'>
  function getVyPlayer() {
    var url = window.location.href;
    var queryParams = url.split('?');
    if (queryParams.length < 2) { return null; }

    var vyPlayerId = null;
    var params = queryParams[1].split('&');
    params.some(function(p) {
      if (p.indexOf('vy-player') !== -1) {
        vyPlayerId = p.split('=')[1];
      }
      return vyPlayerId !== null;
    });
    return vyPlayerId;
  }

  function startVyPlayer(id) {
    if (!id) { return; }
    var fnName = 'fn_vidyard_' + id;
    if (window[fnName]) { window[fnName](); }
  }

  function injectVyPlayer(id) {
    if (!id) { return; }
    var h = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.id = 'vidyard_embed_code_' + id;
    s.src = '//play-staging-aquaman.vidyard.com/' + id + '.js?v=3.1.1&type=lightbox';
    s.onload = function() { startVyPlayer(id); }
    h.appendChild(s);
  }

  window.onload = function() {
    injectVyPlayer(getVyPlayer());
  }
</script>
