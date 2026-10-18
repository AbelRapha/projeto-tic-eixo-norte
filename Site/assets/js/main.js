/* =============================================================
   TIC Eixo Norte — interações do site
   Sem dependências externas.
   ============================================================= */
(function () {
  'use strict';

  var reduzir = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- 1. Menu móvel ---------------- */
  var btnMenu = document.getElementById('btnMenu');
  var nav     = document.getElementById('nav');

  if (btnMenu && nav) {
    btnMenu.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      btnMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      btnMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    nav.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'A') {
        nav.classList.remove('aberto');
        btnMenu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------- 2. Revelar no scroll ---------------- */
  var revelar = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !reduzir) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revelar.forEach(function (el) { obs.observe(el); });
  } else {
    revelar.forEach(function (el) { el.classList.add('visivel'); });
  }

  /* ---------------- 3. Contadores animados ---------------- */
  function animar(el) {
    var alvo    = parseFloat(el.getAttribute('data-count'));
    var casas   = parseInt(el.getAttribute('data-dec') || '0', 10);
    var sufixo  = el.getAttribute('data-suffix') || '';
    var duracao = 1500;
    var inicio  = null;

    function passo(ts) {
      if (inicio === null) inicio = ts;
      var p = Math.min((ts - inicio) / duracao, 1);
      var e = 1 - Math.pow(1 - p, 3);              // easeOutCubic
      var v = alvo * e;
      el.textContent = (casas > 0 ? v.toFixed(casas) : Math.round(v).toLocaleString('pt-BR')) + sufixo;
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  var contadores = document.querySelectorAll('[data-count]');

  if (!reduzir && 'IntersectionObserver' in window) {
    var obs2 = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          animar(e.target);
          obs2.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    contadores.forEach(function (el) { obs2.observe(el); });
  } else {
    contadores.forEach(function (el) {
      var v = parseFloat(el.getAttribute('data-count'));
      var casas = parseInt(el.getAttribute('data-dec') || '0', 10);
      el.textContent = (casas > 0 ? v.toFixed(casas) : Math.round(v).toLocaleString('pt-BR')) +
                       (el.getAttribute('data-suffix') || '');
    });
  }

  /* ---------------- 4. Abas ---------------- */
  var abas = document.querySelectorAll('.aba');

  abas.forEach(function (aba) {
    aba.addEventListener('click', function () {
      var alvo = aba.getAttribute('data-alvo');

      abas.forEach(function (a) {
        a.classList.remove('is-ativa');
        a.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.painel').forEach(function (p) { p.classList.remove('is-ativo'); });

      aba.classList.add('is-ativa');
      aba.setAttribute('aria-selected', 'true');
      var painel = document.getElementById(alvo);
      if (painel) painel.classList.add('is-ativo');
    });
  });

  /* ---------------- 5. Filtro de cidades ---------------- */
  var chips = document.querySelectorAll('.chip');
  var cidades = document.querySelectorAll('.cidade');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var alvo = chip.getAttribute('data-filtro');

      chips.forEach(function (c) { c.classList.remove('is-ativo'); });
      chip.classList.add('is-ativo');

      cidades.forEach(function (cid) {
        var regiao = cid.getAttribute('data-regiao');
        cid.hidden = !(alvo === 'todas' || regiao === alvo);
        cid.classList.add('visivel');
      });
    });
  });

  /* ---------------- 6. Scroll-spy do menu ---------------- */
  var secoes = ['sobre', 'cidades', 'tecnico', 'andamento'];
  var links  = {};

  secoes.forEach(function (id) {
    links[id] = document.querySelector('.nav a[href="#' + id + '"]');
  });

  function spy() {
    var pos = window.scrollY + 120;
    var atual = null;

    secoes.forEach(function (id) {
      var s = document.getElementById(id);
      if (s && s.offsetTop <= pos) atual = id;
    });

    Object.keys(links).forEach(function (id) {
      if (links[id]) links[id].classList.toggle('ativo', id === atual);
    });
  }

  /* ---------------- 7. Botão voltar ao topo ---------------- */
  var btnTopo = document.getElementById('topoBtn');

  function aoRolar() {
    spy();
    if (btnTopo) btnTopo.classList.toggle('visivel', window.scrollY > 600);
  }

  if (btnTopo) {
    btnTopo.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduzir ? 'auto' : 'smooth' });
    });
  }

  var pendente = false;
  window.addEventListener('scroll', function () {
    if (!pendente) {
      pendente = true;
      requestAnimationFrame(function () { aoRolar(); pendente = false; });
    }
  }, { passive: true });

  aoRolar();
})();
