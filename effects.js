/**
 * effects.js — CRT visual effects for the Pip-Boy terminal site
 * Vanilla JS, no dependencies.
 */

(function () {
  'use strict';

  // === TYPEWRITER — types out text on first visit ===
  function typewrite(el, speed) {
    const html = el.innerHTML;
    // Split by tags to preserve <br> etc.
    const tokens = html.split(/(<[^>]+>)/);
    el.style.visibility = 'visible';
    el.style.height = el.offsetHeight + 'px';
    el.style.width = el.offsetWidth + 'px';
    el.innerHTML = '';
    let t = 0, c = 0;
    function tick() {
      if (t >= tokens.length) {
        el.style.height = '';
        el.style.width = '';
        return;
      }
      const token = tokens[t];
      if (token.startsWith('<')) {
        // Insert whole tag at once
        el.innerHTML += token;
        t++;
        tick();
      } else if (c < token.length) {
        el.innerHTML += token[c];
        c++;
        setTimeout(tick, speed);
      } else {
        t++;
        c = 0;
        tick();
      }
    }
    tick();
  }

  // Run typewriter on elements with [data-typewrite] (first visit only)
  const TYPED_KEY = 'waldmann_typed';
  if (!sessionStorage.getItem(TYPED_KEY)) {
    document.querySelectorAll('[data-typewrite]').forEach(function (el) {
      const speed = parseInt(el.getAttribute('data-typewrite')) || 30;
      typewrite(el, speed);
    });
    sessionStorage.setItem(TYPED_KEY, '1');
  }

  // === SCROLL REVEAL — fade in elements as they enter viewport ===
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  // === RANDOM FLICKER — occasional subtle screen flicker ===
  var frame = document.querySelector('.screen-frame');
  if (frame) {
    function randomFlicker() {
      var delay = 5000 + Math.random() * 15000; // 5-20 seconds
      setTimeout(function () {
        frame.style.opacity = '0.92';
        setTimeout(function () {
          frame.style.opacity = '1';
          setTimeout(function () {
            frame.style.opacity = '0.96';
            setTimeout(function () {
              frame.style.opacity = '1';
              randomFlicker();
            }, 50);
          }, 30);
        }, 60);
      }, delay);
    }
    randomFlicker();
  }

  // === SIDEBAR DOTS — light up based on scroll position ===
  var dots = document.querySelectorAll('.sidebar .dot');
  if (dots.length) {
    function updateDots() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? scrollTop / docHeight : 0;
      var lit = Math.round(pct * dots.length);
      dots.forEach(function (dot, i) {
        if (i < lit) dot.classList.add('on');
        else dot.classList.remove('on');
      });
    }
    window.addEventListener('scroll', updateDots, { passive: true });
    updateDots();
  }

  // === HOVER SOUND EFFECT (optional) — adds tactile feedback ===
  // Uncomment if you want subtle audio:
  // var tabs = document.querySelectorAll('.tabs a');
  // tabs.forEach(function(tab) {
  //   tab.addEventListener('mouseenter', function() {
  //     var ctx = new (window.AudioContext || window.webkitAudioContext)();
  //     var osc = ctx.createOscillator();
  //     var gain = ctx.createGain();
  //     osc.connect(gain);
  //     gain.connect(ctx.destination);
  //     osc.frequency.value = 800;
  //     gain.gain.value = 0.03;
  //     osc.start();
  //     osc.stop(ctx.currentTime + 0.05);
  //   });
  // });

})();
