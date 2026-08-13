/* Infinite card carousel for the home page section grids.
 *
 * Progressive enhancement: markup renders as a normal .blog-grid. This script
 * only takes over when there are more cards than fit in one view, adding the
 * .is-active class that reveals the arrows and dots.
 *
 * "Infinite" is achieved by cloning the cards so the track holds three copies
 * of the set. We sit in the middle copy and, after each transition, silently
 * jump back to the equivalent middle position, so paging never hits an end.
 */
(function () {
  'use strict';

  var PER_VIEW_BREAKPOINTS = [
    { maxWidth: 700, perView: 1 },
    { maxWidth: 1080, perView: 2 }
  ];

  function perViewFor(configured) {
    var width = window.innerWidth;
    for (var i = 0; i < PER_VIEW_BREAKPOINTS.length; i++) {
      if (width <= PER_VIEW_BREAKPOINTS[i].maxWidth) {
        return Math.min(PER_VIEW_BREAKPOINTS[i].perView, configured);
      }
    }
    return configured;
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function Carousel(root) {
    this.root = root;
    this.track = root.querySelector('.blog-grid');
    this.viewport = root.querySelector('[data-carousel-viewport]');
    this.prevBtn = root.querySelector('[data-carousel-prev]');
    this.nextBtn = root.querySelector('[data-carousel-next]');
    this.dotsHost = root.querySelector('[data-carousel-dots]');
    if (!this.track || !this.viewport) return;

    this.configuredPerView = parseInt(root.getAttribute('data-per-view'), 10) || 3;
    this.originals = Array.prototype.slice.call(this.track.children);
    this.count = this.originals.length;
    this.index = 0;
    this.animating = false;
    this.cloned = false;

    this.onPrev = this.page.bind(this, -1);
    this.onNext = this.page.bind(this, 1);
    if (this.prevBtn) this.prevBtn.addEventListener('click', this.onPrev);
    if (this.nextBtn) this.nextBtn.addEventListener('click', this.onNext);

    this.track.addEventListener('transitionend', this.onTransitionEnd.bind(this));
    this.root.addEventListener('keydown', this.onKeydown.bind(this));

    var self = this;
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { self.layout(); }, 150);
    });

    this.layout();
  }

  /* Decide between static grid and active carousel, then size the track. */
  Carousel.prototype.layout = function () {
    var perView = perViewFor(this.configuredPerView);
    this.perView = perView;
    this.root.style.setProperty('--carousel-per-view', perView);

    var needsCarousel = this.count > perView;

    if (!needsCarousel) {
      this.teardownClones();
      this.root.classList.add('is-static');
      this.root.classList.remove('is-active');
      this.track.style.transform = '';
      this.renderDots(0);
      return;
    }

    this.root.classList.remove('is-static');
    this.root.classList.add('is-active');
    this.setupClones();

    // Keep the current page valid if perView grew on resize.
    this.pageCount = Math.ceil(this.count / perView);
    if (this.index >= this.count) this.index = 0;

    this.jumpTo(this.index);
    this.renderDots(this.currentPage());
  };

  /* Three copies of the card set: [tail][originals][head]. */
  Carousel.prototype.setupClones = function () {
    if (this.cloned) return;
    var frag = document.createDocumentFragment();
    var i;
    for (i = 0; i < this.count; i++) {
      var before = this.originals[i].cloneNode(true);
      before.setAttribute('aria-hidden', 'true');
      before.classList.add('is-clone');
      frag.appendChild(before);
    }
    this.track.insertBefore(frag, this.originals[0]);

    for (i = 0; i < this.count; i++) {
      var after = this.originals[i].cloneNode(true);
      after.setAttribute('aria-hidden', 'true');
      after.classList.add('is-clone');
      this.track.appendChild(after);
    }
    this.cloned = true;
  };

  Carousel.prototype.teardownClones = function () {
    if (!this.cloned) return;
    var clones = this.track.querySelectorAll('.is-clone');
    for (var i = 0; i < clones.length; i++) {
      clones[i].parentNode.removeChild(clones[i]);
    }
    this.cloned = false;
  };

  /* Width of one card plus its gap, measured from the DOM. */
  Carousel.prototype.step = function () {
    var first = this.track.children[0];
    if (!first) return 0;
    var styles = window.getComputedStyle(this.track);
    var gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return first.getBoundingClientRect().width + gap;
  };

  Carousel.prototype.offsetFor = function (index) {
    // this.count offsets the middle copy.
    return -((index + this.count) * this.step());
  };

  Carousel.prototype.jumpTo = function (index) {
    this.index = index;
    var prior = this.track.style.transition;
    this.track.style.transition = 'none';
    this.track.style.transform = 'translateX(' + this.offsetFor(index) + 'px)';
    // Force reflow so the suppressed transition doesn't apply to the next change.
    void this.track.offsetWidth;
    this.track.style.transition = prior;
  };

  Carousel.prototype.currentPage = function () {
    return Math.floor(((this.index % this.count) + this.count) % this.count / this.perView);
  };

  Carousel.prototype.page = function (direction) {
    if (!this.root.classList.contains('is-active')) return;

    // A click mid-slide settles the in-flight move first, then starts the next.
    // Ignoring it would feel dead for the whole duration; letting the target
    // accumulate instead would walk past the cloned buffer.
    if (this.animating) {
      this.settle();
    }

    var target = this.index + direction * this.perView;

    if (prefersReducedMotion()) {
      this.index = this.normalize(target);
      this.jumpTo(this.index);
      this.renderDots(this.currentPage());
      return;
    }

    this.animating = true;
    this.index = target;
    this.track.style.transform = 'translateX(' + this.offsetFor(target) + 'px)';
    this.renderDots(this.currentPage());
  };

  Carousel.prototype.normalize = function (index) {
    return ((index % this.count) + this.count) % this.count;
  };

  /* Finish an in-flight slide immediately and re-seat into the middle copy. */
  Carousel.prototype.settle = function () {
    this.animating = false;
    this.jumpTo(this.normalize(this.index));
  };

  /* After the slide lands, silently re-seat into the middle copy. */
  Carousel.prototype.onTransitionEnd = function (event) {
    if (event.target !== this.track || event.propertyName !== 'transform') return;
    this.settle();
    this.renderDots(this.currentPage());
  };

  Carousel.prototype.goToPage = function (pageIndex) {
    if (this.animating) this.settle();
    var target = pageIndex * this.perView;
    var delta = target - this.normalize(this.index);
    if (delta === 0) return;
    this.page(delta / this.perView);
  };

  Carousel.prototype.renderDots = function (active) {
    if (!this.dotsHost) return;
    var pages = this.root.classList.contains('is-active')
      ? Math.ceil(this.count / this.perView)
      : 0;

    if (this.dotsHost.childElementCount !== pages) {
      this.dotsHost.innerHTML = '';
      for (var i = 0; i < pages; i++) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Page ' + (i + 1) + ' of ' + pages);
        dot.addEventListener('click', this.goToPage.bind(this, i));
        this.dotsHost.appendChild(dot);
      }
    }

    for (var j = 0; j < this.dotsHost.children.length; j++) {
      this.dotsHost.children[j].setAttribute('aria-current', j === active ? 'true' : 'false');
    }
  };

  Carousel.prototype.onKeydown = function (event) {
    if (event.key === 'ArrowLeft') {
      this.page(-1);
    } else if (event.key === 'ArrowRight') {
      this.page(1);
    }
  };

  function init() {
    var roots = document.querySelectorAll('[data-carousel]');
    for (var i = 0; i < roots.length; i++) {
      new Carousel(roots[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
