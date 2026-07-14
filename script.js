// ============================================================
// 다국어(i18n) — 한국어 / English / 日本語
// data-i18n(본문 HTML), data-i18n-placeholder / -aria-label / -alt / -content(메타)
// 선택값은 localStorage("nd-lang")에 저장, 첫 방문 시 브라우저 언어로 추정
// ============================================================
var I18N = (function () {
  var DICT = {
    ko: {
      "meta.title": "나와드리 — 나의 소중한 여행 기록장",
      "meta.desc": "친구들과 함께 짠 일정, 나눠 낸 비용, 각자 찍은 사진 — 따로 놀던 모든 걸 한 앱에서 모아 우리만의 추억 지도로 남겨요. 2026년 8월 출시 예정.",
      "brand.name": "나와드리",
      "nav.features": "기능",
      "nav.split": "정산",
      "nav.map": "추억 지도",
      "nav.now": "추천",
      "nav.goods": "굿즈",
      "nav.notify": "출시 알림",
      "nav.menuOpen": "메뉴 열기",
      "nav.menuClose": "메뉴 닫기",
      "a11y.nextSection": "다음 섹션으로",
      "a11y.prev": "이전",
      "a11y.next": "다음",
      "hero.badge": "2026년 8월 출시 예정",
      "hero.eyebrow": "나의 소중한 여행 기록장",
      "hero.title": "여행의 모든 순간을<br />나와드리로 연결하다",
      "hero.lead": "함께 짠 일정도, 나눠 낸 비용도, 각자 찍은 사진도<br />흩어진 추억을 한 곳에 모아요.",
      "email.placeholder": "이메일 주소",
      "email.submit": "출시 알림 받기",
      "store.soon": "COMING SOON",
      "plan.cat": "협업 일정",
      "plan.title": "함께 짜는<br />여행 계획",
      "plan.desc": "친구를 초대하면 일정이 실시간으로 같이 채워져요.<br class=\"br-desk\" />누가 뭘 정했는지 한눈에, 지도 위 동선까지 깔끔하게.",
      "plan.chip1": "실시간 공동 편집",
      "plan.chip2": "지도 동선 정리",
      "split.cat": "자동 정산",
      "split.title": "찰칵 한 번에<br />자동 정산",
      "split.desc": "영수증만 찍으면 OCR이 금액을 읽고, 다중 통화 환율까지<br class=\"br-desk\" />반영해 1/N로 딱 나눠드려요. 계산기 꺼내는 시간은 이제 안녕.",
      "split.chip1": "OCR 스캔",
      "split.chip2": "다중 통화",
      "split.chip3": "1/N 자동",
      "map.cat": "나만의 지도",
      "map.title": "지도 위에 펼쳐지는<br />우리의 여행",
      "map.desc": "사진과 이동 경로가 지도에 그대로 찍혀요. 어디서 무얼 했는지, 우리 여행이 한 장의 지도로 남아요.",
      "map.tag1": "사진 핀",
      "map.tag2": "이동 경로",
      "now.cat": "나와드리 now",
      "now.title": "다녀온 여행이<br />다음 여행이 되도록",
      "now.desc": "지난 여행에 남긴 일정·영수증·사진이 차곡차곡 쌓여 당신의 취향이 돼요. 나와드리가 그 취향을 읽고, 다음에 떠날 곳을 골라드려요.",
      "now.chip1": "취향 학습",
      "now.chip2": "다음 여행지 추천",
      "plan.shot": "함께 짜는 여행 일정 앱 화면",
      "split.shot": "찰칵 한 번에 자동 정산 앱 화면",
      "map.shot": "지도 위에 펼쳐지는 추억 지도 앱 화면",
      "now.shot": "나와드리 now 취향 추천 앱 화면",
      "rec.head": "오늘의 추천",
      "rec1.place": "교토, 아라시야마",
      "rec1.why": "지난 봄 그 골목길, 또 걷고 싶을 거예요",
      "rec1.meta": "★ 4.9 · 당신의 취향 96%",
      "rec2.place": "다낭, 미케 비치",
      "rec2.why": "느긋한 바다, 당신이 좋아하던 결",
      "rec2.meta": "★ 4.7 · 당신의 취향 91%",
      "rec3.place": "치앙마이, 올드타운",
      "rec3.why": "골목 카페가 많은 동네, 취향 저격",
      "rec3.meta": "★ 4.8 · 당신의 취향 89%",
      "goods.cat": "굿즈",
      "goods.title": "추억을<br />손에 잡히게",
      "goods.desc": "화면 속 사진을 실물로. 여행이 끝나면 손에 쥐어지는 한 권, 한 컷으로 남겨요.",
      "good1.title": "포토북",
      "good1.desc": "여행 한 권으로 완성",
      "good1.meta": "하드커버 · 24p~",
      "good1.alt": "포토북 굿즈",
      "good2.title": "필름",
      "good2.desc": "그날의 색을 그대로",
      "good2.meta": "36컷 · 현상 포함",
      "good2.alt": "필름 굿즈",
      "good3.title": "폴라로이드",
      "good3.desc": "순간을 즉석에서",
      "good3.meta": "8장 세트",
      "good3.alt": "폴라로이드 굿즈",
      "cta.title": "여행 떠나기 전에,<br />먼저 만나요",
      "cta.sub": "2026년 8월, 가장 먼저 소식 받아보세요.",
      "cta.submit": "알림 받기",
      "cta.note": "또는 <a class=\"nd-cta-link\" href=\"https://instagram.com/nawadri\" target=\"_blank\" rel=\"noopener noreferrer\">@nawadri</a> 팔로우",
      "footer.tag": "나의 소중한 여행 기록장",
      "footer.contact": "문의",
      "footer.copy": "© 2026 나와드리 · 2026.08 출시",
      "signup.done": "신청 완료 ✓",
      "signup.after": "곧 소식 보내드릴게요!"
    },
    en: {
      "meta.title": "Nawadri — Your precious travel journal",
      "meta.desc": "Plans you made together, costs you split, photos you each took — bring everything scattered into one app and keep it as your own memory map. Launching August 2026.",
      "brand.name": "Nawadri",
      "nav.features": "Features",
      "nav.split": "Split",
      "nav.map": "Memory Map",
      "nav.now": "For You",
      "nav.goods": "Goods",
      "nav.notify": "Get Notified",
      "nav.menuOpen": "Open menu",
      "nav.menuClose": "Close menu",
      "a11y.nextSection": "Next section",
      "a11y.prev": "Previous",
      "a11y.next": "Next",
      "hero.badge": "Launching August 2026",
      "hero.eyebrow": "Your precious travel journal",
      "hero.title": "Connect every travel<br />moment with Nawadri",
      "hero.lead": "Plans made together, costs split, photos each of you took —<br />gather your scattered memories in one place.",
      "email.placeholder": "Email address",
      "email.submit": "Get launch updates",
      "store.soon": "COMING SOON",
      "plan.cat": "Shared Planning",
      "plan.title": "Plan your trip<br />together",
      "plan.desc": "Invite friends and the itinerary fills up together in real time.<br class=\"br-desk\" />See who decided what at a glance, with clean routes on the map.",
      "plan.chip1": "Real-time co-editing",
      "plan.chip2": "Routes on the map",
      "split.cat": "Auto Split",
      "split.title": "Snap once,<br />split automatically",
      "split.desc": "Just snap the receipt — OCR reads the amount, applies multi-currency rates,<br class=\"br-desk\" />and splits it evenly. No more reaching for the calculator.",
      "split.chip1": "OCR scan",
      "split.chip2": "Multi-currency",
      "split.chip3": "Auto split",
      "map.cat": "Your Map",
      "map.title": "Our journey<br />unfolds on the map",
      "map.desc": "Photos and routes are pinned right onto the map. Where you went and what you did — your whole trip stays as a single map.",
      "map.tag1": "Photo pins",
      "map.tag2": "Travel route",
      "now.cat": "Nawadri now",
      "now.title": "Let past trips<br />shape your next",
      "now.desc": "The itineraries, receipts, and photos from past trips stack up into your taste. Nawadri reads it and picks where you should head next.",
      "now.chip1": "Learns your taste",
      "now.chip2": "Next-trip picks",
      "plan.shot": "Shared trip planning app screen",
      "split.shot": "Snap-once automatic bill split app screen",
      "map.shot": "Memory map app screen with photos on a map",
      "now.shot": "Nawadri now taste-based recommendation app screen",
      "rec.head": "Today's picks",
      "rec1.place": "Kyoto, Arashiyama",
      "rec1.why": "You'll want to walk that spring alley again",
      "rec1.meta": "★ 4.9 · 96% your taste",
      "rec2.place": "Da Nang, My Khe Beach",
      "rec2.why": "The easygoing sea you loved",
      "rec2.meta": "★ 4.7 · 91% your taste",
      "rec3.place": "Chiang Mai, Old Town",
      "rec3.why": "A neighborhood full of alley cafés — right up your street",
      "rec3.meta": "★ 4.8 · 89% your taste",
      "goods.cat": "Goods",
      "goods.title": "Hold your<br />memories",
      "goods.desc": "Turn on-screen photos into real things. When the trip ends, keep it as a book or a single frame you can hold.",
      "good1.title": "Photo Book",
      "good1.desc": "A whole trip in one book",
      "good1.meta": "Hardcover · 24p+",
      "good1.alt": "Photo book goods",
      "good2.title": "Film",
      "good2.desc": "The colors of that day, as they were",
      "good2.meta": "36 frames · dev included",
      "good2.alt": "Film goods",
      "good3.title": "Polaroid",
      "good3.desc": "The moment, instantly",
      "good3.meta": "Set of 8",
      "good3.alt": "Polaroid goods",
      "cta.title": "Before you set off,<br />let's meet first",
      "cta.sub": "Be the first to hear, August 2026.",
      "cta.submit": "Notify me",
      "cta.note": "Or follow <a class=\"nd-cta-link\" href=\"https://instagram.com/nawadri\" target=\"_blank\" rel=\"noopener noreferrer\">@nawadri</a>",
      "footer.tag": "Your precious travel journal",
      "footer.contact": "Contact",
      "footer.copy": "© 2026 Nawadri · Launch 2026.08",
      "signup.done": "Subscribed ✓",
      "signup.after": "We'll be in touch soon!"
    },
    ja: {
      "meta.title": "ナワドゥリ — 大切な旅の記録帳",
      "meta.desc": "一緒に立てた日程、分けて払った費用、それぞれ撮った写真 — バラバラだったすべてを一つのアプリにまとめ、私たちだけの思い出マップに残します。2026年8月リリース予定。",
      "brand.name": "ナワドゥリ",
      "nav.features": "機能",
      "nav.split": "精算",
      "nav.map": "思い出マップ",
      "nav.now": "おすすめ",
      "nav.goods": "グッズ",
      "nav.notify": "配信通知",
      "nav.menuOpen": "メニューを開く",
      "nav.menuClose": "メニューを閉じる",
      "a11y.nextSection": "次のセクションへ",
      "a11y.prev": "前へ",
      "a11y.next": "次へ",
      "hero.badge": "2026年8月リリース予定",
      "hero.eyebrow": "大切な旅の記録帳",
      "hero.title": "旅のすべての瞬間を<br />ナワドゥリでつなぐ",
      "hero.lead": "一緒に立てた日程も、分け合った費用も、それぞれ撮った写真も<br />散らばった思い出を一つの場所に集めます。",
      "email.placeholder": "メールアドレス",
      "email.submit": "リリース通知を受け取る",
      "store.soon": "COMING SOON",
      "plan.cat": "共同編集",
      "plan.title": "みんなで作る<br />旅のプラン",
      "plan.desc": "友達を招待すると、日程がリアルタイムで一緒に埋まります。<br class=\"br-desk\" />誰が何を決めたか一目で、地図上の動線もすっきり。",
      "plan.chip1": "リアルタイム共同編集",
      "plan.chip2": "地図で動線整理",
      "split.cat": "自動精算",
      "split.title": "一枚撮るだけで<br />自動精算",
      "split.desc": "レシートを撮るだけでOCRが金額を読み取り、複数通貨の為替まで<br class=\"br-desk\" />反映してきっちり割り勘。電卓を出す時間はもうおしまい。",
      "split.chip1": "OCRスキャン",
      "split.chip2": "複数通貨",
      "split.chip3": "自動割り勘",
      "map.cat": "あなたの地図",
      "map.title": "地図に広がる<br />私たちの旅",
      "map.desc": "写真と移動経路がそのまま地図に刻まれます。どこで何をしたか、旅のすべてが一枚の地図に残ります。",
      "map.tag1": "写真ピン",
      "map.tag2": "移動経路",
      "now.cat": "ナワドゥリ now",
      "now.title": "行った旅が<br />次の旅になるように",
      "now.desc": "過去の旅に残した日程・レシート・写真が積み重なって、あなたの好みになります。ナワドゥリがそれを読み取り、次の行き先を選びます。",
      "now.chip1": "好みを学習",
      "now.chip2": "次の旅先を提案",
      "plan.shot": "みんなで作る旅程アプリ画面",
      "split.shot": "一枚撮るだけで自動精算するアプリ画面",
      "map.shot": "地図に写真が広がる思い出マップのアプリ画面",
      "now.shot": "ナワドゥリ now おすすめ画面",
      "rec.head": "今日のおすすめ",
      "rec1.place": "京都・嵐山",
      "rec1.why": "あの春の路地、また歩きたくなるはず",
      "rec1.meta": "★ 4.9 ・ 好み度96%",
      "rec2.place": "ダナン・ミーケービーチ",
      "rec2.why": "のんびりした海、あなた好みの雰囲気",
      "rec2.meta": "★ 4.7 ・ 好み度91%",
      "rec3.place": "チェンマイ・旧市街",
      "rec3.why": "路地カフェが多い街、ど真ん中の好み",
      "rec3.meta": "★ 4.8 ・ 好み度89%",
      "goods.cat": "グッズ",
      "goods.title": "思い出を<br />手に取れるかたちに",
      "goods.desc": "画面の中の写真を実物に。旅が終わったら、手に取れる一冊、一枚として残します。",
      "good1.title": "フォトブック",
      "good1.desc": "旅が一冊で完成",
      "good1.meta": "ハードカバー・24p〜",
      "good1.alt": "フォトブックグッズ",
      "good2.title": "フィルム",
      "good2.desc": "あの日の色そのままに",
      "good2.meta": "36枚・現像込み",
      "good2.alt": "フィルムグッズ",
      "good3.title": "ポラロイド",
      "good3.desc": "瞬間をその場で",
      "good3.meta": "8枚セット",
      "good3.alt": "ポラロイドグッズ",
      "cta.title": "旅に出る前に、<br />先に会いましょう",
      "cta.sub": "2026年8月、誰よりも早くお知らせを。",
      "cta.submit": "通知を受け取る",
      "cta.note": "または <a class=\"nd-cta-link\" href=\"https://instagram.com/nawadri\" target=\"_blank\" rel=\"noopener noreferrer\">@nawadri</a> をフォロー",
      "footer.tag": "大切な旅の記録帳",
      "footer.contact": "お問い合わせ",
      "footer.copy": "© 2026 ナワドゥリ・2026.08 リリース",
      "signup.done": "登録完了 ✓",
      "signup.after": "すぐにお知らせします！"
    }
  };

  var LABELS = { ko: "한국어", en: "English", ja: "日本語" };
  var STORAGE_KEY = "nd-lang";
  var current = "ko";

  function supported(code) { return DICT.hasOwnProperty(code); }

  function detect() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && supported(saved)) return saved;
    var navs = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < navs.length; i++) {
      var base = String(navs[i]).toLowerCase().split("-")[0];
      if (supported(base)) return base;
    }
    return "ko";
  }

  // 키 조회 — 현재 언어에 없으면 한국어 → 키 자체 순으로 폴백
  function t(key) {
    var d = DICT[current] || DICT.ko;
    if (d[key] != null) return d[key];
    if (DICT.ko[key] != null) return DICT.ko[key];
    return key;
  }

  function apply(code) {
    if (!supported(code)) code = "ko";
    current = code;
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}

    document.documentElement.lang = code;

    // 본문 텍스트(HTML 허용)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    // 속성형 번역
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-content")));
    });

    // 언어 선택기 라벨 + active 상태 동기화
    var label = document.querySelector(".nd-lang-current");
    if (label) label.textContent = LABELS[code] || code;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === code);
    });

    // 다른 모듈에 언어 변경 통지(예: 햄버거 aria-label 재설정)
    document.dispatchEvent(new CustomEvent("nd:langchange", { detail: { lang: code } }));
  }

  return { t: t, apply: apply, detect: detect, current: function () { return current; } };
})();

// 첫 적용 — 저장값/브라우저 언어로 즉시 번역
I18N.apply(I18N.detect());

// 출시 알림 이메일 신청 폼 처리
document.querySelectorAll("form[data-signup]").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = form.querySelector('input[type="email"]');
    var btn = form.querySelector("button");
    var email = (input.value || "").trim();
    if (!email) return;

    // TODO: 실제 백엔드/메일링 서비스 연동
    var original = btn.textContent;
    btn.textContent = I18N.t("signup.done");
    btn.disabled = true;
    input.value = "";
    input.placeholder = I18N.t("signup.after");

    setTimeout(function () {
      btn.textContent = original;
      btn.disabled = false;
      input.placeholder = I18N.t("email.placeholder");
    }, 2600);
  });
});

// 모바일 햄버거 메뉴 토글
(function () {
  var btn = document.querySelector(".nd-hamburger");
  var menu = document.getElementById("nd-mobile-menu");
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", I18N.t(open ? "nav.menuClose" : "nav.menuOpen"));
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  // 메뉴 안 링크를 누르면 닫기
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });

  // 데스크톱 폭으로 넓어지면 메뉴 상태 초기화
  window.addEventListener("resize", function () {
    if (window.innerWidth > 640) setOpen(false);
  });

  // 언어 변경 시 현재 열림 상태에 맞춰 aria-label 재설정
  // (data-i18n-aria-label은 "열기" 고정 → 닫힘 상태 기준이라 그대로 두면 됨)
  document.addEventListener("nd:langchange", function () {
    setOpen(menu.classList.contains("is-open"));
  });
})();

// 언어 선택 (한국어 / English / 日本語) — 실제 번역 적용(I18N.apply)
(function () {
  // 데스크톱 드롭다운 열고/닫기
  var lang = document.querySelector(".nd-lang");
  if (lang) {
    var btn = lang.querySelector(".nd-lang-btn");
    var menu = lang.querySelector(".nd-lang-menu");

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!lang.contains(e.target)) {
        menu.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 데스크톱 + 모바일 언어 버튼 공통 처리 — 선택 시 전체 페이지 번역
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      I18N.apply(b.getAttribute("data-lang"));
      var m = document.querySelector(".nd-lang-menu");
      var bt = document.querySelector(".nd-lang-btn");
      if (m) m.classList.remove("is-open");
      if (bt) bt.setAttribute("aria-expanded", "false");
    });
  });
})();

// 스크롤 진입 시 섹션 등장 (fade + up)
(function () {
  var items = document.querySelectorAll(".nd-reveal");
  if (!items.length) return;

  function showAll() { items.forEach(function (el) { el.classList.add("is-visible"); }); }

  // 옵저버 미지원/생성 실패 시 전부 보이게 (콘텐츠 숨김 방지 안전망)
  if (!("IntersectionObserver" in window)) { showAll(); return; }

  try {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target); // 한 번 등장하면 유지
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } catch (e) {
    showAll();
  }
})();

// 굿즈 캐러셀 — 화살표 이동 + 드래그/스와이프 + 화살표 상태 갱신
(function () {
  var carousel = document.querySelector(".nd-carousel");
  if (!carousel) return;
  var track = carousel.querySelector(".nd-carousel-track");
  var prev = carousel.querySelector(".nd-carousel-prev");
  var next = carousel.querySelector(".nd-carousel-next");
  if (!track) return;

  // 카드 한 칸(카드폭 + gap) 계산
  function step() {
    var card = track.querySelector(".nd-good-card");
    if (!card) return track.clientWidth * 0.8;
    var gap = parseInt(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0", 10) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function updateArrows() {
    if (!prev || !next) return;
    var max = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 0;
    next.disabled = track.scrollLeft >= max;
  }

  if (prev && next) {
    [prev, next].forEach(function (b) {
      b.addEventListener("click", function () {
        track.scrollBy({ left: step() * parseInt(b.getAttribute("data-dir"), 10), behavior: "smooth" });
      });
    });
  }
  track.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();

  // 마우스 드래그로 스크롤 (트랙패드/터치는 네이티브 스와이프)
  var down = false, startX = 0, startScroll = 0, moved = false;
  track.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    down = true; moved = false;
    startX = e.clientX; startScroll = track.scrollLeft;
    track.classList.add("is-dragging");
  });
  track.addEventListener("pointermove", function (e) {
    if (!down) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    track.scrollLeft = startScroll - dx;
  });
  function endDrag() {
    if (!down) return;
    down = false;
    track.classList.remove("is-dragging");
  }
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);
  track.addEventListener("pointerleave", endDrag);
  // 드래그 후 클릭으로 인한 의도치 않은 이동 방지
  track.addEventListener("click", function (e) {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
})();

// 마스코트(F2) 눈 — 마우스/터치 위치를 따라 움직임 (히어로 마스코트 한정)
(function () {
  var svg = document.querySelector(".nd-mascot-static");
  if (!svg) return;
  var eyes = svg.querySelector("g"); // 검은 눈 그룹 (두 눈)
  if (!eyes) return;

  // 움직임 폭(SVG 사용자 단위) — 얼굴 밖으로 나가지 않을 만큼
  var MAX_X = 9, MAX_Y = 7;
  var target = { x: 0, y: 0 };
  var raf = null;

  eyes.style.transition = "transform .12s ease-out";

  function eyeCenter() {
    var r = svg.getBoundingClientRect();
    // 눈은 얼굴 중앙보다 약간 아래(viewBox cy≈162/300)
    return { x: r.left + r.width / 2, y: r.top + r.height * 0.55 };
  }

  function aim(px, py) {
    var c = eyeCenter();
    var dx = px - c.x, dy = py - c.y;
    var dist = Math.hypot(dx, dy);
    var amp = Math.min(1, dist / 140); // 너무 가까우면 가운데로
    var ang = Math.atan2(dy, dx);
    target.x = Math.cos(ang) * MAX_X * amp;
    target.y = Math.sin(ang) * MAX_Y * amp;
    if (!raf) raf = requestAnimationFrame(apply);
  }

  function apply() {
    raf = null;
    eyes.style.transform = "translate(" + target.x.toFixed(2) + "px," + target.y.toFixed(2) + "px)";
  }

  window.addEventListener("mousemove", function (e) { aim(e.clientX, e.clientY); }, { passive: true });
  function onTouch(e) {
    if (e.touches && e.touches[0]) aim(e.touches[0].clientX, e.touches[0].clientY);
  }
  window.addEventListener("touchstart", onTouch, { passive: true });
  window.addEventListener("touchmove", onTouch, { passive: true });
})();

// 부드러운 앵커 스크롤
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    var id = a.getAttribute("href");
    if (id === "#" || id === "#top") return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
