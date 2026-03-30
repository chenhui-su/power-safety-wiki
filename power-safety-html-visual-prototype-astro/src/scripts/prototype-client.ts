interface PrototypeEvent {
  id: string;
  year: number;
  dateLabel: string;
  title: string;
  location: string;
  affectedLabel: string;
  hook: string;
}

interface ArchiveSection {
  heading: string;
  body: string;
}

interface ArchiveDetail {
  eventId: string;
  code: string;
  date: string;
  title: string;
  region: string;
  impact: string;
  trigger: string;
  lesson: string;
  lead: string;
  sections: ArchiveSection[];
  docs: string[];
  videoTitle: string;
  videoUrl: string;
  videoNote: string;
}

interface PrototypePayload {
  sectionIds: string[];
  events: PrototypeEvent[];
  archiveDetails: ArchiveDetail[];
}

const payloadElement = document.getElementById("prototype-payload");

if (!payloadElement?.textContent) {
  throw new Error("Missing prototype payload.");
}

const payload = JSON.parse(payloadElement.textContent) as PrototypePayload;
const sectionElements = payload.sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean) as HTMLElement[];

const progressDots = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-progress-index]"),
);
const nav = document.getElementById("chapterNav");
const chapterLabel = document.getElementById("chapterLabel");
const prevButton = document.querySelector<HTMLButtonElement>("[data-nav-prev]");
const nextButton = document.querySelector<HTMLButtonElement>("[data-nav-next]");

const overlay = document.getElementById("archiveDetailOverlay");
const overlayBody = document.getElementById("archiveDetailBody");
const overlayBreadcrumb = document.getElementById("archiveDetailBreadcrumb");
const overlayClose = document.getElementById("archiveDetailClose");

const archiveByEventId = new Map(payload.archiveDetails.map((detail) => [detail.eventId, detail]));

let currentSectionIndex = Math.max(
  0,
  sectionElements.findIndex((element) => element.classList.contains("is-active")),
);
let wheelLocked = false;
let touchStartY = 0;
let archiveTimers: number[] = [];
let empathyTimers: number[] = [];
let mapTimers: number[] = [];

const mapMarkers = Array.from(
  document.querySelectorAll<SVGGElement>("[data-map-marker]"),
);
const mapStatus = document.querySelector<HTMLElement>("[data-map-status]");
const mapTitle = document.querySelector<HTMLElement>("[data-map-title]");
const mapYear = document.querySelector<HTMLElement>("[data-map-year]");
const mapHook = document.querySelector<HTMLElement>("[data-map-hook]");
const mapTimelineFill = document.querySelector<HTMLElement>("[data-map-timeline-fill]");
const mapReplayButton = document.querySelector<HTMLButtonElement>("[data-map-replay]");
const archiveCards = Array.from(document.querySelectorAll<HTMLElement>(".archive-card"));

function isOverlayOpen() {
  return overlay?.classList.contains("is-open") ?? false;
}

function clearTimers(timers: number[]) {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers.length = 0;
}

function updateChrome() {
  const currentSection = sectionElements[currentSectionIndex];
  if (!currentSection) return;

  progressDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSectionIndex);
  });

  if (chapterLabel) {
    chapterLabel.textContent = currentSection.dataset.title ?? "";
  }

  nav?.classList.toggle("is-visible", currentSectionIndex > 0);

  if (prevButton) prevButton.disabled = currentSectionIndex === 0;
  if (nextButton) nextButton.disabled = currentSectionIndex === sectionElements.length - 1;
}

function resetEmpathyScene() {
  clearTimers(empathyTimers);
  const copy = document.querySelector<HTMLElement>("[data-empathy-copy]");
  const blackout = document.querySelector<HTMLElement>("[data-empathy-blackout]");
  const darkText = document.querySelector<HTMLElement>("[data-empathy-dark-text]");
  const stats = document.querySelector<HTMLElement>("[data-empathy-stats]");

  copy?.classList.remove("is-muted");
  blackout?.classList.remove("is-visible");
  darkText?.classList.remove("is-visible");
  stats?.classList.remove("is-visible");
}

function playEmpathyScene() {
  resetEmpathyScene();

  const copy = document.querySelector<HTMLElement>("[data-empathy-copy]");
  const blackout = document.querySelector<HTMLElement>("[data-empathy-blackout]");
  const darkText = document.querySelector<HTMLElement>("[data-empathy-dark-text]");
  const stats = document.querySelector<HTMLElement>("[data-empathy-stats]");

  empathyTimers.push(
    window.setTimeout(() => {
      copy?.classList.add("is-muted");
      blackout?.classList.add("is-visible");
    }, 3200),
  );

  empathyTimers.push(
    window.setTimeout(() => {
      darkText?.classList.add("is-visible");
    }, 4700),
  );

  empathyTimers.push(
    window.setTimeout(() => {
      stats?.classList.add("is-visible");
    }, 6200),
  );
}

function resetArchiveCards() {
  clearTimers(archiveTimers);
  archiveCards.forEach((card) => card.classList.remove("is-visible"));
}

function animateArchiveCards() {
  resetArchiveCards();
  archiveCards.forEach((card, index) => {
    archiveTimers.push(
      window.setTimeout(() => {
        card.classList.add("is-visible");
      }, 80 + index * 90),
    );
  });
}

function updateMapInfo(index: number) {
  const event = payload.events[index];
  if (!event) return;

  mapMarkers.forEach((marker, markerIndex) => {
    marker.classList.toggle("is-active", markerIndex === index);
  });

  if (mapTitle) mapTitle.textContent = event.title;
  if (mapYear) mapYear.textContent = event.dateLabel;
  if (mapHook) mapHook.textContent = event.hook;
  if (mapTimelineFill) {
    mapTimelineFill.style.width = `${((index + 1) / payload.events.length) * 100}%`;
  }
}

function resetMapReplay() {
  clearTimers(mapTimers);
  if (mapStatus) mapStatus.textContent = "等待进入本章";
  if (mapTimelineFill) mapTimelineFill.style.width = "0%";
  mapMarkers.forEach((marker) => marker.classList.remove("is-active"));
}

function playMapReplay() {
  resetMapReplay();

  if (mapStatus) {
    mapStatus.textContent = "正在按时间顺序回放全球停电档案";
  }

  payload.events.forEach((event, index) => {
    mapTimers.push(
      window.setTimeout(() => {
        updateMapInfo(index);
        if (mapStatus) {
          mapStatus.textContent = `当前聚焦：${event.year} · ${event.title}`;
        }
      }, 500 + index * 650),
    );
  });

  mapTimers.push(
    window.setTimeout(() => {
      if (mapStatus) {
        mapStatus.textContent = "回放完成，可点击标记查看档案条目";
      }
    }, 600 + payload.events.length * 650),
  );
}

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildArchiveVideo(detail: ArchiveDetail) {
  if (!detail.videoUrl) {
    return `
      <div class="archive-video-placeholder">
        <div class="archive-video-play">▶</div>
        <div>${escapeHtml(detail.videoTitle)}</div>
        <p>${escapeHtml(detail.videoNote)}</p>
      </div>
    `;
  }

  if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(detail.videoUrl)) {
    return `<video controls preload="metadata" src="${escapeHtml(detail.videoUrl)}"></video>`;
  }

  return `
    <iframe
      src="${escapeHtml(detail.videoUrl)}"
      title="${escapeHtml(detail.videoTitle)}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
}

function renderArchiveDetail(detail: ArchiveDetail) {
  if (!overlayBody) return;

  if (overlayBreadcrumb) {
    overlayBreadcrumb.textContent = `${detail.date} · ${detail.title}`;
  }

  overlayBody.innerHTML = `
    <div class="archive-detail-grid">
      <div>
        <section class="archive-panel archive-hero">
          <div class="archive-code">${escapeHtml(detail.code)}</div>
          <div class="archive-date">${escapeHtml(detail.date)}</div>
          <h2 class="archive-title">${escapeHtml(detail.title)}</h2>
          <p class="archive-lead">${escapeHtml(detail.lead)}</p>
          <div class="archive-meta-grid">
            <div class="archive-meta-card">
              <span class="archive-meta-label">事件区域</span>
              <span class="archive-meta-value">${escapeHtml(detail.region)}</span>
            </div>
            <div class="archive-meta-card">
              <span class="archive-meta-label">影响规模</span>
              <span class="archive-meta-value">${escapeHtml(detail.impact)}</span>
            </div>
            <div class="archive-meta-card">
              <span class="archive-meta-label">直接触发</span>
              <span class="archive-meta-value">${escapeHtml(detail.trigger)}</span>
            </div>
            <div class="archive-meta-card">
              <span class="archive-meta-label">核心启示</span>
              <span class="archive-meta-value">${escapeHtml(detail.lesson)}</span>
            </div>
          </div>
        </section>
        <div class="archive-sections">
          ${detail.sections
            .map(
              (section) => `
                <section class="archive-panel archive-section-block">
                  <h4>${escapeHtml(section.heading)}</h4>
                  <p>${escapeHtml(section.body)}</p>
                </section>
              `,
            )
            .join("")}
        </div>
      </div>

      <aside class="archive-side-stack">
        <section class="archive-panel archive-video-card">
          <h3 class="archive-side-title">视频分析</h3>
          <div class="archive-video-frame">${buildArchiveVideo(detail)}</div>
        </section>
        <section class="archive-panel archive-doc-card">
          <h3 class="archive-side-title">档案文档</h3>
          <div class="archive-doc-list">
            ${detail.docs.map((item) => `<div class="archive-doc-item">${escapeHtml(item)}</div>`).join("")}
          </div>
        </section>
      </aside>
    </div>
  `;

  overlayBody.scrollTop = 0;
}

function openArchiveDetail(eventId: string) {
  if (!overlay) return;
  const detail = archiveByEventId.get(eventId);
  if (!detail) return;

  renderArchiveDetail(detail);
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("overlay-open");
}

function closeArchiveDetail() {
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overlay-open");
}

function resetSectionEffects(previousId?: string) {
  if (previousId === "empathy") resetEmpathyScene();
  if (previousId === "globalmap") resetMapReplay();
  if (previousId === "finaleC") resetArchiveCards();
}

function activateSection(index: number) {
  if (index < 0 || index >= sectionElements.length || index === currentSectionIndex) return;
  if (isOverlayOpen()) return;

  const previousSection = sectionElements[currentSectionIndex];
  const nextSection = sectionElements[index];

  resetSectionEffects(previousSection?.id);
  previousSection?.classList.remove("is-active");
  nextSection.classList.add("is-active");
  currentSectionIndex = index;
  window.scrollTo({ top: 0, behavior: "auto" });
  updateChrome();

  if (nextSection.id === "empathy") playEmpathyScene();
  if (nextSection.id === "globalmap") playMapReplay();
  if (nextSection.id === "finaleC") animateArchiveCards();
}

function nextSection() {
  activateSection(currentSectionIndex + 1);
}

function previousSection() {
  activateSection(currentSectionIndex - 1);
}

function elementFromEvent(event: Event) {
  return event.target instanceof Element ? event.target : null;
}

prevButton?.addEventListener("click", previousSection);
nextButton?.addEventListener("click", nextSection);

progressDots.forEach((dot, index) => {
  dot.addEventListener("click", () => activateSection(index));
});

document.querySelector("[data-next-section]")?.addEventListener("click", nextSection);

window.addEventListener(
  "wheel",
  (event) => {
    if (isOverlayOpen() || wheelLocked) return;

    const target = elementFromEvent(event);
    if (target?.closest(".map-shell")) return;

    if (event.deltaY > 32) {
      nextSection();
      wheelLocked = true;
    } else if (event.deltaY < -32) {
      previousSection();
      wheelLocked = true;
    }

    if (wheelLocked) {
      window.setTimeout(() => {
        wheelLocked = false;
      }, 800);
    }
  },
  { passive: true },
);

window.addEventListener(
  "touchstart",
  (event) => {
    if (isOverlayOpen()) return;
    touchStartY = event.touches[0]?.clientY ?? 0;
  },
  { passive: true },
);

window.addEventListener(
  "touchend",
  (event) => {
    if (isOverlayOpen()) return;
    const delta = touchStartY - (event.changedTouches[0]?.clientY ?? 0);
    if (Math.abs(delta) < 64) return;
    if (delta > 0) nextSection();
    if (delta < 0) previousSection();
  },
  { passive: true },
);

document.addEventListener("keydown", (event) => {
  if (isOverlayOpen()) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeArchiveDetail();
    }
    return;
  }

  if (["ArrowDown", "ArrowRight", " "].includes(event.key)) {
    event.preventDefault();
    nextSection();
  }

  if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
    event.preventDefault();
    previousSection();
  }
});

document.querySelectorAll<HTMLElement>("[data-open-archive]").forEach((element) => {
  element.addEventListener("click", () => {
    const eventId = element.dataset.eventId;
    if (eventId) openArchiveDetail(eventId);
  });
});

mapMarkers.forEach((marker) => {
  const index = Number(marker.dataset.mapIndex);
  const eventId = marker.dataset.eventId;

  const openFromMarker = () => {
    if (Number.isFinite(index)) {
      updateMapInfo(index);
      const event = payload.events[index];
      if (mapStatus && event) {
        mapStatus.textContent = `当前聚焦：${event.year} · ${event.title}`;
      }
    }

    if (eventId) openArchiveDetail(eventId);
  };

  marker.addEventListener("click", openFromMarker);
  marker.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFromMarker();
    }
  });
});

mapReplayButton?.addEventListener("click", playMapReplay);
overlayClose?.addEventListener("click", closeArchiveDetail);
overlay?.addEventListener("click", (event) => {
  if (event.target === overlay) closeArchiveDetail();
});

if (payload.events[0] && mapStatus) {
  updateMapInfo(0);
  mapStatus.textContent = "等待进入本章";
}

sectionElements.forEach((element, index) => {
  element.classList.toggle("is-active", index === currentSectionIndex);
});

updateChrome();
